const express = require('express');
const expressLayouts = require('express-ejs-layouts');

var bodyParser = require('body-parser');


// Routers
const issues = require('./routes/issues')

const app = express();

app.use(express.json());
app.use(expressLayouts);
app.set('view engine','ejs');

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static content
app.use( express.static( __dirname + "/public" ) );

var check = require('./routes/conn')

//app.use(check);
app.use('/api', require('./routes/issues'))

// Bodyparser
app.use(express.urlencoded({ extended: false}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('listening'))