import {uploadPicture} from "../middlewares/fileMiddleware";
import {checkRole} from "../middlewares/permissionCheckMiddleware";
import {cashValidator, loginValidator, registerValidator} from "../utils/validators/yupValidator";
import {getUserDataFromToken} from "../middlewares/tokenMiddleware";
import {cashOut, updateData, updateEmail, updatePassword, updatePicture, getUserFromToken, checkPasswordAndLogin, createUser} from "../controllers/userController";
import {ROLES} from "../utils/constants/constants";
import express from 'express';

const router = express.Router();

router.post('/register',
    registerValidator,
    createUser
);

router.post('/login',
    loginValidator,
    checkPasswordAndLogin
);

router.post('/',
    getUserFromToken
);

router.put('/data',
    getUserDataFromToken,
    updateData
);

router.put('/password',
    getUserDataFromToken,
    updatePassword
);

router.put('/email',
    getUserDataFromToken,
    updateEmail
);

router.put('/picture',
    getUserDataFromToken,
    uploadPicture,
    updatePicture
);

router.put('/cash',
    getUserDataFromToken,
    checkRole([ROLES.CREATIVE]),
    cashValidator,
    cashOut
);

module.exports = router;


