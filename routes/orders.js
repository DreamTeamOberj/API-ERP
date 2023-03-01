module.exports = (app) => {
    const orders = require('../controllers/orders');

    app.get('/orders', orders.findOrders);

    app.get('/order/:idProduit_Orders/products', orders.findProductsInOrder);

    app.get('/order/:idProduit_Orders/product/:idProduit', orders.findOneProductsInOneOrder);
}