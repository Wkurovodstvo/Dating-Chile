import jwt from 'jsonwebtoken';
import {User, Token} from "../../models";
import {UnauthorizedError} from "../errors/customError";
import _ from "lodash";

module.exports.tokenCreator = (user) => {
    const accessToken = jwt.sign({id: user.id, role: user.role}, process.env.SECRET, {expiresIn: "1m"});
    const refreshToken = jwt.sign({id: user.id, role: user.role}, process.env.REFRESH_SECRET, {expiresIn: "60d"});
    return {accessToken, refreshToken};
};

module.exports.getUserFromToken = async (req, res, next) => {
    const {authorization} = req.headers;
    if(authorization && authorization.includes("Bearer")) {
        const auth = authorization.substring("Bearer ".length);
        try {
            const {id} = jwt.verify(auth, process.env.SECRET);
            const foundUser = await User.findOne({where: {id}});
            if (foundUser) {
                delete foundUser.dataValues.password;
                res.send(foundUser);
            } else {
                next(new UnauthorizedError("Such user doesn't exist!"));
            }
        } catch (e) {
            next(new UnauthorizedError("Access token expired!"));
        }
    }
    else {
        next(new UnauthorizedError("Invalid token data!"));
    }
};

module.exports.checkRefreshToken = async (req,res,next) => {
    const {token} = req.body;
    try {
        const {id} = jwt.verify(token, process.env.REFRESH_SECRET);
        const foundUser = await User.findOne({
            where: {id},
            include: [{
                model: Token,
                as: 'tokens',
            }],
        });
        if (foundUser) {
            const {token: foundRefreshToken} = _.find(foundUser.tokens, {token});
            try{
                jwt.verify(foundRefreshToken, process.env.REFRESH_SECRET);
                console.log("verified");
                delete foundUser.dataValues.password;
                console.log(foundUser);
                res.send(foundUser);        //TODO delete old refresh token, get new access/refresh tokens
            } catch (e) {
                next(new UnauthorizedError("Refresh token expired!"));  //TODO delete old refresh token
            }
        } else {
            next(new UnauthorizedError("Such user doesn't exist!"));
        }
    } catch (e) {
        next(new UnauthorizedError("Refresh token expired!"));  //TODO delete old refresh token
    }
};