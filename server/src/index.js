import express from 'express';
import router from './router/index';
import cors from 'cors';
import errors from './utils/errors/errorHandler';
import http from 'http';
import {listen} from './websocket/socketServer';
require('./db/mongoose');

const PORT = process.env.PORT || 3000;
const app = express();
if(process.env.NODE_ENV === 'development') {
    app.use('/public', express.static('public'));
}
app.use(cors());
app.use(express.json());
app.use('/api',router);
app.use(errors);

const httpServer = http.createServer(app);
httpServer.listen(PORT);
listen(httpServer);


