function validationErrorHandler(err, req, res, next) {
    console.log('----- error handler -----')
    if (err) {
        if (err.name === 'ValidationError') {
            if (process.env.SERVER == 'prod') {
                return res.status(403).json({ code: 403, message: 'validation error' })
            }
            return res.status(403).json({ code: 403, message: 'Validation Error', data: err.message })
        }
        return next(err);
    }
    return next();
}

exports.validationErrorHandler = validationErrorHandler;