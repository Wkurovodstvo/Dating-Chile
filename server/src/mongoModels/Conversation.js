const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    participants: {
        type: [Number],
        required: true
    }

},{
    timestamps: true
});

const Conversation = mongoose.model('Conversation', Schema);

module.exports = Conversation;