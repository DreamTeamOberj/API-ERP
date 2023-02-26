const mysql = require('mysql');

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