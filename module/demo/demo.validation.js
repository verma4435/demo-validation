const Joi = require('joi');
const { DEFAULT_PAGE, DEFAULT_SKIP, DEFAULT_LIMIT } = require('./demo.constants');

const integerSchema = Joi.number().integer();

class DemoValidation {

    getValidation(params) {
        /**
         * @typedef {Object} ValidationParams
         * @property {number} page
         * @property {number} skip
         * @property {number} limit
         */

        /**
         * @type {ValidationParams}
         */
        const schema = Joi.object({
            page: integerSchema.default(DEFAULT_PAGE),
            skip: integerSchema.default(DEFAULT_SKIP),
            limit: integerSchema.default(DEFAULT_LIMIT)
        });

        return schema.validate(params);
    }
}

module.exports = new DemoValidation();