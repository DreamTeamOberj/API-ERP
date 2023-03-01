const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '51.91.153.31',
    user: 'u642141514_admin6',
    password: 'Groupe667',
    database: 'u642141514_admin6',
    waitForConnections: true
});

exports.findOrders = (req, res) => {

    connection.query('SELECT * from orders',
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};

exports.findProductsInOrder = (req, res) => {

    connection.query('select * from product join orders on product.idProduct_Orders = orders.idOrders where product.idProduct_Orders=?',
    [req.params.idProduct_Orders],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};

exports.findOneProductsInOneOrder = (req, res) => {
    connection.query('select * from product join orders on product.idProduct_Orders = orders.idOrders where product.idProduct_Orders=? AND product.idProduct = ?',
    [req.params.idProduct_Orders, req.params.idProduct],
        function (error, results, fields) {
            if (error) throw error;
            res.
            end(JSON.stringify(results));
        });
};