import _ from "lodash";

export const changeOnline = (dialogs, user, online, opponent) => {

    const newDialogs = dialogs.map(dialog => {
        if(_.isEqual(dialog.opponentData.id, user.id)) {
            dialog.opponentData.online = online;
            dialog.opponentData.updatedAt = user.updatedAt;
        }
        return dialog;
    });
    const changedOpponent = opponent;
    if(changedOpponent && _.isEqual(changedOpponent.id, user.id)) {
        changedOpponent.online = online;
        changedOpponent.updatedAt = user.updatedAt;
    }

    return {newDialogs, changedOpponent};

};