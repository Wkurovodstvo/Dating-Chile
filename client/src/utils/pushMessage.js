import _ from "lodash";

export const pushMessage = (messages, newMessage, participants, newParticipants) => {

    if(_.isEqual(_.sortBy(participants), _.sortBy(newParticipants))){
        messages.push(newMessage);
    }

    return messages;
};