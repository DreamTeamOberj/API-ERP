const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

require('./routes/product')(app);

// define a simple route
app.get('/', (req, res) => {
    res.json({message: "API is running ..."});
});

// listen for requests
app.listen(3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});