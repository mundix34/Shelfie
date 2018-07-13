const express = require('express');
const bodyParser = require('body-parser');
const ct = require('./controller');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

const port = 3005;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
    
})

