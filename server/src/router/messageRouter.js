import express from 'express';
import {getLastMessage, sendMessage} from "../controllers/chatController";

const router = express.Router();

router.post('/',
    sendMessage
);

router.get('/',
    getLastMessage
);

module.exports = router;