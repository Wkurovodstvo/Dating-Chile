import {User} from "../models";
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from "../utils/errors/customError";

module.exports.getUserDataFromToken = async (req,res, next) => {
    const {authorization} = req.headers;
    if(authorization && authorization.includes("Bearer")) {
        const auth = authorization.substring("Bearer ".length);
        try {
            const {role, id} = jwt.verify(auth, process.env.SECRET);
            req.role = role;
            req.id = id;
            next();
        } catch (e) {
            next(new UnauthorizedError());
        }
    }
    else {
        next(new UnauthorizedError("Invalid token data!"));
    }
};




