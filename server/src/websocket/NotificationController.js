import _ from "lodash";
import {NOTIFICATION_EVENTS} from "../utils/constants/constants";
import {User} from "../models";
import {findConversations} from "../utils/findConversations";
import {WebsocketController} from "./WebsocketController";
const {SUBSCRIBE, UNSUBSCRIBE, NOTIFY_ENTRY_CREATION, NOTIFY_CONTEST_UPDATE,
    NOTIFY_ENTRY_LIKE, NOTIFY_ENTRY_REJECT, NOTIFY_ENTRY_VICTORY,
    NOTIFY_MESSAGE_SENDING, DISCONNECT, SET_ONLINE} = NOTIFICATION_EVENTS;

module.exports.NotificationWebsocketController = class NotificationWebsocketController extends WebsocketController {

    constructor(httpServer, namespace){
        super(httpServer, namespace);
    }

    subscribeNotifications(initValues,socket) {
        _.forEach(initValues, (value, key) => {
            socket.on(key, value);
        });
    }

    initNotificationEvents(socket) {
        return {
            [DISCONNECT]: async () => {
                const [updatedCount, [user]] = await (User.update({
                        online: false,
                        socketId: null
                    }, {
                        where: {socketId: socket.id},
                        returning: true
                    }
                ));
                if(user) {
                    const {id} = user;
                    const conversations = await findConversations(id);
                    let opponents = conversations.map(conversation => conversation.participants);
                    opponents = _.flattenDeep(opponents);
                    _.pull(opponents, user.id);
                    opponents.map(opponent => {
                        socket.to(`${opponent}`).emit(SET_ONLINE, {user, online: false })
                    });
                }
            },
            [SUBSCRIBE]: async (id) => {
                socket.join(id);
                const [updatedCount, [user]] = await (User.update({
                        online: true,
                        socketId: socket.id
                    }, {
                        where: {id},
                        returning: true
                    }
                ));
                const conversations = await findConversations(id);
                let opponents = conversations.map(conversation => conversation.participants);
                opponents = _.flattenDeep(opponents);
                _.pull(opponents, id);
                opponents.map(opponent => {
                    socket.to(`${opponent}`).emit(SET_ONLINE, {user, online: true })
                });
            },
            [UNSUBSCRIBE]: async (id) => {
                socket.leave(id);
                const [updatedCount, [user]] = await (User.update({
                        online: false,
                        socketId: null
                    }, {
                        where: {id},
                        returning: true
                    }
                ));
                const conversations = await findConversations(id);
                let opponents = conversations.map(conversation => conversation.participants);
                opponents = _.flattenDeep(opponents);
                _.pull(opponents, id);
                opponents.map(opponent => {
                    socket.to(`${opponent}`).emit(SET_ONLINE, {user, online: false })
                });
            },
            [NOTIFY_ENTRY_CREATION]: (id, contestId) => {
                socket.to(`${id}`).emit(NOTIFY_ENTRY_CREATION, {
                    data: `You have new entry in contest #${contestId}!`,
                    url: `/contests/${contestId}`
                })
            },
            [NOTIFY_CONTEST_UPDATE]: (entries) => {
                const uniqueEntries =  _.map(
                    _.uniq(
                        _.map(entries, entry => {
                            return JSON.stringify({
                                creativeId: entry.creativeId,
                                contestId: entry.contestId
                            });
                        })
                    ), entry => {
                        return JSON.parse(entry);
                    }
                );
                uniqueEntries.forEach(entry => {
                    socket.to(`${entry.creativeId}`)
                        .emit(NOTIFY_CONTEST_UPDATE, {
                            data: `Contest #${entry.contestId} was changed!`,
                            url: `/contests/${entry.contestId}`
                        });
                });
            },
            [NOTIFY_ENTRY_VICTORY]: (id, contestId) => {
                socket.to(`${id}`).emit(NOTIFY_ENTRY_VICTORY, {data: `Your entry won in contest #${contestId}!`});
            },
            [NOTIFY_ENTRY_REJECT]: (id, contestId) => {
                socket.to(`${id}`).emit(NOTIFY_ENTRY_REJECT, {
                    data: `Your entry was rejected in contest #${contestId}!`,
                    url: `/contests/${contestId}`
                });
            },
            [NOTIFY_ENTRY_LIKE]: (id, contestId) => {
                socket.to(`${id}`).emit(NOTIFY_ENTRY_LIKE, {
                    data: `Your entry was liked in contest #${contestId}`,
                    url: `/contests/${contestId}`
                });
            },
            [NOTIFY_MESSAGE_SENDING]: (to, from, opponent) => {
                socket.to(`${to}`).emit(NOTIFY_MESSAGE_SENDING, {
                    data: `You have new message from ${opponent.displayName}!`,
                    to,
                    from,
                    opponent
                })
            }
        };
    }

    listen() {
        this.namespace.on('connection', (socket) => {
            this.subscribeNotifications(this.initNotificationEvents(socket),socket);
        });
    }

};