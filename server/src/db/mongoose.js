const mongoose = require('mongoose');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const configPath = env === 'production'
    ? path.join(__dirname, '..', '..', '..', 'src/server/config/config.json')
    : path.join(__dirname, '..', 'config/config.json');
const config = require(configPath)[ env ];

//'mongodb://mongo-prod/chat_database'
//'mongodb://localhost/chat_database'
mongoose.connect(config.mongooseUrl, { useNewUrlParser: true }, (err) => {
    if(err) {
        process.exit(1);
    }
});

mongoose.set('debug', true);

module.exports = mongoose;