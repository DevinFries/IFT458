//Student Name: Devin Fries
//Student ID: 1219677836
//Date: 9/1/2023
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs 
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 
console.log('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.render('index');
});

app.post("/calculate", (req, res) => {
    const {num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("result", { sum, difference, product, quotient });
});

var port = 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});