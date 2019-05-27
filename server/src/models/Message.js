const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    sender: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    conversation: {
        type: mongoose.Schema.ObjectId,
        ref: 'Conversation'
    }

}, {
    timestamps: true
});

const Message = mongoose.model('Message', Schema);

module.exports = Message;