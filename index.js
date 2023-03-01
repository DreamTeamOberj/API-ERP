const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./routes/product')(app);
require('./routes/orders')(app);

app.get('/', (req, res) => {
    res.json({message: "API is running ..."});
});

app.listen(3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});