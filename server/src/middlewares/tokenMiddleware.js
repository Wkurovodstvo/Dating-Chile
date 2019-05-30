import {User} from "../models";
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from "../utils/errors/customError";

module.exports.getUserDataFromToken = async (req,res, next) => {
    const {authorization} = req.headers;
    if(authorization && authorization.includes("Bearer")) {
        const auth = authorization.substring("Bearer ".length);
        try {
            const data = jwt.verify(auth, process.env.REFRESH_SECRET);
            req.data = data;
            next();
        } catch (e) {
            next(new UnauthorizedError("Access token expired!"));
        }
    }
    else {
        next(new UnauthorizedError("Invalid token data!"));
    }
};




