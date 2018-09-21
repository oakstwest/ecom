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

// Product Endpoints
app.get('/api/products', controller.getProducts)

app.post('/api/products', controller.addProductToCart);


// Cart Endpoints

app.get('/api/cart', controller.getCart);

app.delete('/api/cart/:id', controller.deleteProduct);

app.put('/api/cart/:id', controller.updateCart);



app.put('/api/updateProduct/:product_id', controller.updateProduct)

app.put('/api/updateImage/:img_id', controller.updateImage)

// app.get('/api/getProduct',controller.);

app.delete('/api/delete/:product_id', controller.delete)

app.delete('/api/deleteImages/:img_id', controller.deleteImage)




app.listen(SERVER_PORT, () => {
    console.log(`Still alive on port: ${SERVER_PORT}`);
})
