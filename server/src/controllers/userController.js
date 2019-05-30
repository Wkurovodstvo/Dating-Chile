import {sequelize, User, Token} from "../models";
import bcrypt from 'bcrypt';
import {
    UnauthorizedError,
    UserAlreadyExistsError,
    UserNotFoundError,
    WrongPasswordError,
    BankError
} from "../utils/errors/customError";
import fs from "fs";
import {getUserFromToken, tokenCreator} from "../utils/tokens/tokenWorker";
import {getBirthDate} from "../utils/getBirthDate";

module.exports.createUser = async(req,res,next) => {
    console.log(req.body);
    console.log({...req.body});
    const {password,day,month,year} = req.body;
    try {
        const createdUser = await User.create({
            ...req.body,
            password: await bcrypt.hash(password, await bcrypt.genSalt(8)),
            birthDate: getBirthDate(day,month,year)
        }, {returning: true});
        const {accessToken, refreshToken} = tokenCreator(createdUser);
        await Token.create({
           token: refreshToken,
           userId: createdUser.id
        });
        delete createdUser.dataValues.password;
        res.send({
            accessToken,
            refreshToken,
            user: createdUser,
            authSuccess: true
        });
    }
    catch (e) {
        next(new UserAlreadyExistsError());
    }
};


module.exports.checkPasswordAndLogin = async (req,res,next) => {
    const {email, password} = req.body;
    try {
        const foundUser = await User.findOne({
            where: {
                email
            }
        });
        if (foundUser) {
            const match = await bcrypt.compare(password, foundUser.password);
            if (match) {
                const {accessToken, refreshToken} = tokenCreator(foundUser);
                await Token.create({
                    token: refreshToken,
                    userId: foundUser.id
                });
                delete foundUser.dataValues.password;
                res.send({
                    authSuccess: true,
                    accessToken,
                    refreshToken,
                    user: foundUser
                });
            } else {
                next(new WrongPasswordError());
            }
        } else {
            next(new UserNotFoundError());
        }
    } catch (e) {
        next(e);
    }
};

/*module.exports.getUserFromToken = async (req,res,next) => {
    try {
        const user = await getUserFromToken(req.headers);
        const token = req.headers.authorization.substring("Bearer ".length);
        res.send({user, token});
    } catch (e) {
        next(new UnauthorizedError("Invalid token data!"));
    }
};

module.exports.updateData = async(req,res,next) => {
    const { firstName, lastName, displayName } = req.body;
    const { id } = req;
    try {
        const [updatedCount, [user]] = await User.update({
                firstName,
                lastName,
                displayName
            }, {
                where: {id},
                returning: true
            }
        );
        res.send(user);
    }
    catch (e) {
        next(e);
    }
};

module.exports.updatePassword = async(req,res,next) => {
    const { password, currentPassword } = req.body;
    const { id } = req;
    const foundUser = await User.findOne({
        where: {id},
    });
    if(foundUser){
        try {
            const match = await bcrypt.compare(currentPassword, foundUser.password);
            if (match) {
                const user = await foundUser.update({
                    password: await bcrypt.hash(password, await bcrypt.genSalt(8))
                }, {returning: true});
                delete user.password;
                res.send(user);
            } else {
                next(new WrongPasswordError());
            }
        } catch (e) {
            next(e);
        }
    } else {
        next(new UserNotFoundError());
    }
};

module.exports.updateEmail = async(req,res,next) => {
    const {email} = req.body;
    const {id} = req;
    try {
        const [updatedCount, [user]] = await (User.update({
                email
            }, {
                where: {id},
                returning: true
            }
        ));
        res.send(user);
    }
    catch (e) {
        next(e);
    }
};

module.exports.updatePicture = async(req,res,next) => {
    const {profilePicture} = req.body;
    const {id} = req;
    const {filename} = req.file;
    try {
        const [updatedCount, [user]] = await (User.update({
                profilePicture: filename
            }, {
                where: {id},
                returning: true
            }
        ));
        if(profilePicture) {
            const base = process.env.NODE_ENV === "production" ? IMAGE_URL_PROD : IMAGE_URL_DEV;
            fs.unlink(`${base}/${profilePicture}`, err => {
                if (err) {
                    next(err)
                }
            });
        }
        res.send(user);
    }
    catch (e) {
        next(e);
    }
};

module.exports.cashOut = async (req, res, next) => {
    const {amount, card} = req.body;
    const {id} = req;
    let transaction;
    try {
        transaction = await sequelize.transaction();
        const bankResponse = await bankTransaction(BANK_DATA, card, amount);
        if (bankResponse) {
            const [[result]] = await sequelize.query(
                `UPDATE "Users" 
                  SET "balance" = "balance" - '${amount}' 
                  WHERE "id" = '${id}' 
                  RETURNING *`);
            transaction.commit();
            res.send(result);
        } else {
            next(new BankError("Bank transaction error!"));
        }

    } catch (e) {
        transaction.rollback();
        next(e);
    }
};*/
