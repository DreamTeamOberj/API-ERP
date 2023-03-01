const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '51.91.153.31',
    user: 'u642141514_admin6',
    password: 'Groupe667',
    database: 'u642141514_admin6'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})

exports.findOrders = (req, res) => {

    connection.query('SELECT * from orders',
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};

exports.findProductsInOrder = (req, res) => {

    connection.query('SELECT * from product join orders on product.idOrder = orders.id where product.idOrder=?',
    [req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};

exports.findOneProductsInOneOrder = (req, res) => {
    connection.query('SELECT * FROM product JOIN orders ON product.idOrder = orders.id WHERE product.idOrder = ? AND product.id = ?',
    [req.params.id, req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.
            end(JSON.stringify(results));
        });
};