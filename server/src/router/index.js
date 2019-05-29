import express from 'express';
import userRouter from "./userRouter";
/*import conversationsRouter from "./conversationsRouter";
import conversationRouter from "./conversationRouter";
import messageRouter from "./messageRouter";*/
const router = express.Router();

router.use('/user', userRouter);
/*router.use('/conversation', conversationRouter);
router.use('/conversations', conversationsRouter);
router.use('/message', messageRouter);*/

module.exports = router;