const express = require('express');
const DemoRoutes = require('./module/demo/demo.routes');

class MainRoutes {
    constructor() {
        this.routes = express.Router();
        this.routeSetup();
    }

    routeSetup() {
        this.routes.use('/demo', new DemoRoutes().getRoutes());
    }

    getRoutes() {
        return this.routes;
    }
}

module.exports = MainRoutes;