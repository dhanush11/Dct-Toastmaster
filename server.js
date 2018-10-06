const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const {mongoose} = require('./config/db');
const {router} = require('./config/routes');

app.use(express.json());
app.use(morgan('short'));
app.use('/', router);


app.listen(port, () => {
    console.log(`Server has started ${port}`);
});
