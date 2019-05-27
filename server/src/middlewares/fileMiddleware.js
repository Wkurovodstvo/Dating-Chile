const multer = require('multer');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const configPath = env === 'production'
    ? path.join(__dirname, '..', '..', '..', 'src/server/config/config.json')
    : path.join(__dirname, '..', 'config/config.json');
const config = require(configPath)[ env ];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(config.multerUrl);
        cb(null, config.multerUrl)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' +  file.originalname)
    }
});

const upload = multer({ storage }).single('file');

module.exports.uploadPicture = (req,res,next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            next(err);
        } else if (err) {
            next(err);
        }
        return next();
    })
};

const multiStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.multerUrl)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const uploads = multer({ storage: multiStorage }).array('file');

module.exports.uploadPictures = (req,res,next) => {
    uploads(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            next(err);
        } else if (err) {
            next(err);
        }
        return next();
    })
};




