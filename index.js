const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const rateLimit = require('express-rate-limit');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://paye-ton-kawa.vercel.app/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
app.use(cors(corsOptions));

require('./routes/product')(app);
require('./routes/orders')(app);

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: 'Vous avez atteint la limite de requêtes pour cette période de temps.'
  });

app.use('/', limiter);

app.get('/', (req, res) => {
    res.json({message: "API is running ..."});
});

app.listen(3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});