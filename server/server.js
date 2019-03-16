require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , axios = require('axios')
    , bodyParser = require('body-parser')
    , controller = require('./controller')

const {
    SERVER_PORT,
  SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,
  NODE_ENV
} = process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB CONNECTED')
}).catch(err => console.log(err));

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  }))
  
// AUTH 0 ENDPOINTS //
app.get('/auth/callback', async (req, res) => {
    //use code from query in payload  for toke
    const payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
  
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
  
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
  
  
    let {
      email,
      name,
      picture,
      sub
    } = resWithUserData.data;
    let db = req.app.get('db');
    let foundUser = await req.app.get('db').find_user([sub])
    if (foundUser[0]) {
      req.session.user = foundUser[0];
      res.redirect('/#/private')
    } else {
      let createdUser = await db.create_user([name, email, picture, sub])
      req.session.user = createdUser[0];
      res.redirect('/#/private');
    }
  })
  
  function envCheck(req, res, next) {
    if (NODE_ENV === 'dev') {
      req.app.get('db').get_user_by_id().then(userWithIdOne => {
        req.session.user = userWithIdOne[0]
        next();
      })
    } else {
      nex()
    }
  }
  
  app.get('/api/user-data', envCheck, (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(400).send("Nooooooo!")
    }
  })
  
  app.get('/auth.logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/');
  })
// TWILIO ENDPOINTS //

// STRIPE ENDPOINTS //

// PRODUCT ENDPOINTS //

// BRAIN JS //

app.get('/api/products', controller.getProducts)

app.post('/api/products', controller.addProductToCart);

// CART ENDPOINTS //

app.get('/api/cart', controller.getCart);

app.delete('/api/cart/:cart_id', controller.deleteProduct);

app.put('/api/cart/:product_id', controller.updateCart);

app.get('/api/cartD', controller.deleteAllCart);

// SERVER //

app.listen(SERVER_PORT, () => {
    console.log(`Still alive on port: ${SERVER_PORT}`);
})
