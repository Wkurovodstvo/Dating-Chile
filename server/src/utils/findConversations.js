import Message from '../mongoModels/Message';
import {User} from "../models";

module.exports.findConversations = async (id) => {
    const conversations = await Message.aggregate([
        {
            $lookup: {
                from: "conversations",
                localField: "conversation",
                foreignField: "_id",
                as: "conversationData"
            }
        },
        {
            $unwind: "$conversationData"
        },
        {
            $match: {
                "conversationData.participants": parseInt(id)
            }
        },
        {
            $sort: {
                createdAt: -1
            }
        },
        {
            $group : {
                _id : "$conversationData._id",
                mid: {$first: "$_id"},
                sender: {$first: "$sender"},
                text: {$first: "$text"},
                createdAt: {$first: "$createdAt"},
                participants: {$first: "$conversationData.participants"}
            }
        },
        {
            $project: {
                _id : "$_id",
                sender: "$sender",
                mid: "$mid",
                text: "$text",
                createdAt: "$createdAt",
                participants: "$participants"
            }
        }
    ]);

    return conversations;
};