import socketio from 'socket.io';
import {User} from "../models";


module.exports.WebsocketController = class WebsocketController {

    constructor(httpServer, namespace) {
        if (this.constructor === WebsocketController) {
            throw new TypeError('Abstract class "Widget" cannot be instantiated directly.');
        }
        this.io = socketio.listen(httpServer, { origins: '*:*', transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling']});
        this.namespace = this.io.of(namespace);
    }

};

