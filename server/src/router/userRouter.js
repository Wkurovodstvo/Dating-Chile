import {loginValidator, registerValidator} from "../utils/validators/yupValidator";
import {createUser} from "../controllers/userController";
import express from 'express';

const router = express.Router();

router.post('/registration',
    registerValidator,
    createUser
);

/*router.post('/login',
    loginValidator,
    checkPasswordAndLogin
);*/

module.exports = router;


