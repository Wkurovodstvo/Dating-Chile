class ApplicationError extends Error {
    constructor(message, status) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.message = message ||
            'Something went wrong. Please try again.';

        this.status = status || 500;
    }
}

class UserAlreadyExistsError extends ApplicationError{
    constructor(message){
        super(message || "User already exists!", 400);
    }
}

class UnauthorizedError extends ApplicationError{
    constructor(message){
        super(message || "Unauthorized!", 401);
    }
}

class UserNotFoundError extends ApplicationError{
    constructor(message){
        super(message || "User not found!", 404);
    }
}

class UpdateError extends ApplicationError{
    constructor(message){
        super(message || "Can't update user!", 400);
    }
}

class WrongPasswordError extends ApplicationError{
    constructor(message){
        super(message || "Wrong password!", 400);
    }
}

class OrderNotFoundError extends ApplicationError{
    constructor(message){
        super(message || "Wrong password!", 404);
    }
}

class BankError extends ApplicationError{
    constructor(message){
        super(message || "Invalid bank data!", 400);
    }
}

class ContestError extends ApplicationError{
    constructor(message){
        super(message || "Contest not found!", 404);
    }
}

class BalanceError extends ApplicationError{
    constructor(message){
        super(message || "Out of balance!", 400);
    }
}

class WinnerError extends ApplicationError{
    constructor(message) {
        super(message || "This user is not a winner!", 400);
    }
}

class BalanceUpdateError extends ApplicationError{
    constructor(message){
        super(message || "Balance update error!", 400);
    }
}

class PermissionError extends ApplicationError{
    constructor(message){
        super(message || "Permissions denied!", 403);
    }
}

module.exports.UserAlreadyExistsError = UserAlreadyExistsError;
module.exports.UnauthorizedError = UnauthorizedError;
module.exports.UserNotFoundError = UserNotFoundError;
module.exports.UpdateError = UpdateError;
module.exports.WrongPasswordError = WrongPasswordError;
module.exports.OrderNotFoundError = OrderNotFoundError;
module.exports.BankError = BankError;
module.exports.BalanceError = BalanceError;
module.exports.WinnerError = WinnerError;
module.exports.BalanceUpdateError = BalanceUpdateError;
module.exports.ContestError = ContestError;
module.exports.PermissionError = PermissionError;
