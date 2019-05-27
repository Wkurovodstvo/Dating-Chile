import 'babel-polyfill';
import express from 'express';
import userRouter from "./userRouter";
import contestRouter from "./contestRouter";
import contestsRouter from "./contestsRouter";
import ordersRouter from "./ordersRouter";
import entryRouter from "./entryRouter";
import conversationsRouter from "./conversationsRouter";
import conversationRouter from "./conversationRouter";
import messageRouter from "./messageRouter";
import {bankTransaction} from "../utils/bank";
const router = express.Router();

router.use('/user', userRouter);
router.use('/contest', contestRouter);
router.use('/contests', contestsRouter);
router.use('/orders', ordersRouter);
router.use('/entry', entryRouter);
router.use('/conversation', conversationRouter);
router.use('/conversations', conversationsRouter);
router.use('/message', messageRouter);

router.put('/bank', bankTransaction);

module.exports = router;