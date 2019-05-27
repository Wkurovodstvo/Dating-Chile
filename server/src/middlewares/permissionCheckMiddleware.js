import {User} from "../models";
import {PermissionError} from "../utils/errors/customError";

module.exports.checkRole = (role) => {
    return (req,res,next) => {
        if(role.includes(req.role)) {
            next();
        }
        else {
            next(new PermissionError());
        }
    }
};