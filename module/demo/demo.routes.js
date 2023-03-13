const express = require('express');
const { getValidationMiddleware } = require('./middleware/demo.validation.middleware');

class DemoRoutes {
    constructor() {
        this.routes = express.Router();
        this.routeSetup();
    }

    routeSetup() {
        this.routes.get('/', getValidationMiddleware, (req, res) => {
            res.send('ok')
        })
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = DemoRoutes;