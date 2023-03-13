const { getValidation } = require('../demo.validation');
class DemoValidation {

    getValidationMiddleware(req, res, next) {
        const { value, error } = getValidation(req.query);
        if (error) {
            return next(error);
        }
        req.query = value;
        next();
    }
}

module.exports = new DemoValidation();