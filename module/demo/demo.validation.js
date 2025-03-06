const Joi = require('joi');

const integerSchema = Joi.number().integer();
const DEFAULT_PAGE = 1;
const DEFAULT_SKIP = 0;
const DEFAULT_LIMIT = 10;

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