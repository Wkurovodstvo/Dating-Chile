const registerYup = require('../../schemas/registrationValidationScheme');
const loginYup = require('../../schemas/loginValidationScheme');
const cashYup = require('../../schemas/cashValidationScheme');

module.exports.registerValidator = async(req, res, next) => {
    try {
        await registerYup.validate(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};

module.exports.loginValidator = async(req, res, next) => {
    try {
        await loginYup.validate(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};

module.exports.cashValidator = async(req,res,next) => {
    try {
        await cashYup.validate(req.body);
        next();
    }
    catch (err) {
        next(err);
    }
};