import {loginValidator, registerValidator} from "../utils/validators/yupValidator";
import {createUser, checkPasswordAndLogin} from "../controllers/userController";
import {getUserFromToken, checkRefreshToken} from "../utils/tokens/tokenWorker";
import {getUserDataFromToken} from "../middlewares/tokenMiddleware";
import express from 'express';

const router = express.Router();

router.post('/registration',
    registerValidator,
    createUser
);

router.post('/login',
    loginValidator,
    checkPasswordAndLogin
);

router.get('/',
    getUserFromToken
);

router.post('/token/refresh',
    checkRefreshToken
);

router.get('/test',
    getUserDataFromToken,
    (req,res,next) => {
        console.log("we are here");
        console.log(req.data);
    }
);

module.exports = router;


