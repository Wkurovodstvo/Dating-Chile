import express from 'express';
import {getConversationMessages} from "../controllers/chatController";

const router = express.Router();

router.get('/',
    getConversationMessages
);

module.exports = router;