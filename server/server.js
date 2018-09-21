require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , axios = require('axios')
    , bodyParser = require('body-parser')
    , controller = require('./controller')

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB CONNECTED')
}).catch(err => console.log(err));

// PRODUCT ENDPOINTS
app.get('/api/products', controller.getProducts)

app.post('/api/products', controller.addProductToCart);


// CART ENDPOINTS

app.get('/api/cart', controller.getCart);

app.delete('/api/cart/:cart_id', controller.deleteProduct);

app.put('/api/cart/:product_id', controller.updateCart);




app.listen(SERVER_PORT, () => {
    console.log(`Still alive on port: ${SERVER_PORT}`);
})
