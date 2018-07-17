const express = require('express');
const bodyParser = require('body-parser');
const ct = require('./controller');
const app = express();
require('dotenv').config();
const massive = require('massive');


app.use(bodyParser.json());

app.get('/api/inventory', ct.getAll);
app.post('/api/product', ct.create);
// app.get('/api/product/:id', ct.getOne);
app.put('/api/product/:id', ct.update);
app.delete('/api/product/:id', ct.delete);

const port = 3008;

massive( process.env.CONNECTIONS).then(dbSet => {
    app.set('db', dbSet)
}).catch(err => console.log(err))

app.listen(process.env.PORT, () => {
    
    console.log(`listening on port: ${process.env.PORT}`)
    
});

