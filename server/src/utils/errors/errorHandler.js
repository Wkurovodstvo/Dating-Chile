const errorHandler = (err, req, res, next) => {
    console.log(err);
    if(!err.status) {
        res.status(500).send(err.message);
    }
    else {
        res.status(err.status).send(err.message);
    }
};

module.exports = errorHandler;