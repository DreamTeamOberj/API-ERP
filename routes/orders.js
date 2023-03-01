module.exports = (app) => {
    const orders = require('../controllers/orders');

    app.get('/orders', orders.findOrders);

    app.get('/order/:idProduct_Orders/products', orders.findProductsInOrder);

    app.get('/order/:idProduct_Orders/product/:idProduct', orders.findOneProductsInOneOrder);
}