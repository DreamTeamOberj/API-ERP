module.exports = (app) => {
    const orders = require('../controllers/orders');

    app.get('/orders', orders.findOrders);

    app.get('/order/:id/products', orders.findProductsInOrder);

    app.get('/order/:id/product/:id', orders.findOneProductsInOneOrder);
}