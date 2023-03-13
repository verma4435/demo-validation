const express = require('express');
const MainRoutes = require('./routes');
require('dotenv').config();

const { validationErrorHandler } = require('./module/common/middleware/validation-error.common.middleware');
const { PORT } = process.env;

const app = express();


app.use('/', new MainRoutes().getRoutes());


app.use(validationErrorHandler);

app.listen(PORT, () => console.log(`server is listing at ${PORT}`));
