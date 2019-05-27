import {NotificationWebsocketController} from "./NotificationController";
import {WEBSOCKET_NAMESPACES} from "../utils/constants/constants";

module.exports.listen = httpServer => {
    new NotificationWebsocketController(httpServer, WEBSOCKET_NAMESPACES.NOTIFICATION).listen();
};