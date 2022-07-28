const express = require('express');
require('dotenv').config();
const fruits = require('./models/fruits');
const app = express();
const port = process.env.PORT || 3003;

//our data
//const fruits = ['apple', 'banana', 'pear'];


//our routes
//index
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//show
app.get('fruits/:indexOfFruitsArray', (req, res) =>{
    res.send(fruits[req.params.indexOfFruitsArray])
});

//our port
app.listen(3000, () => {
    console.log('listening');
});