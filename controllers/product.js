const mysql = require('mysql');
// connection configurations
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin6',
    password: 'Groupe667',
    database: 'mspr_dev'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})

exports.findAll = (req, res) => {
    connection.query('select * from product',
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};

exports.findOne = (req, res) => {

    connection.query('select * from product where Id=?',
        [req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
};