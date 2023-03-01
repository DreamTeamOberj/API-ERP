var cors = require('cors')

var corsOptions = {
    origin: 'https://api-erp.vercel.app/',
    optionsSuccessStatus: 200
  }


module.exports = (app) => {
    const product = require('../controllers/product');

    app.get('/products',cors(corsOptions), product.findAll );

    app.get('/product/:idProduct', product.findOne);
}