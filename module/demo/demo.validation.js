const Joi = require('joi');

class DemoValidation {

    getValidation(params) {
        const schema = Joi.object({
            page: Joi.number().integer().default(1),
            skip: Joi.number().integer().default(0),
            limit: Joi.number().integer().default(10)
        });

        return schema.validate(params);
    }
}

module.exports = new DemoValidation();