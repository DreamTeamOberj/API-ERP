module.exports = (app) => {
    const product = require('../controllers/product');

    app.get('/products', product.findAll );

    app.get('/product/:idProduit', product.findOne);
}