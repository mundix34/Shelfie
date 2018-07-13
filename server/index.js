const express = require('express');
const bodyParser = require('body-parser');
const ct = require('./controller');
const app = express();
require('dotenv').config();
const massive = require('massive');


app.use(bodyParser.json());

const port = 3008;

massive(process.env.CONNECTIONS).then(dbSet => {
    app.set('db', dbSet)
}).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
    
})

