import express from 'express';
import {findConversations} from "../controllers/chatController";

const router = express.Router();

router.get('/:id',
    findConversations
);

module.exports = router;