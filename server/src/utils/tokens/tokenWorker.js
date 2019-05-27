import jwt from 'jsonwebtoken';
import {User} from "../../models";
import {UnauthorizedError} from "../errors/customError";

module.exports.tokenCreator = (user) => {
    return jwt.sign({id: user.id, role: user.role}, process.env.SECRET, {expiresIn: "2h"});
};

module.exports.getUserFromToken = async (header) => {
    const {authorization} = header;
    if (authorization && authorization.includes("Bearer")) {
        const auth = authorization.substring("Bearer ".length);
        const {id} = jwt.verify(auth, process.env.SECRET);
        const foundUser = await User.findOne({where: {id}});
        if (foundUser) {
            delete foundUser.dataValues.password;
            return foundUser;
        } else {
            throw new UnauthorizedError("Such user doesn't exist!");
        }
    } else {
        throw new UnauthorizedError("Invalid token data!");
    }
};