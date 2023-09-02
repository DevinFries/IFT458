//Student Name: Devin Fries
//Student ID: 1219677836
//Date: 8/27/2023
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

let students = [];

app.get('/StudentForm', (req, res) => {
    res.render('index', { students: students });
});

app.post('/StudentData', (req, res) => {
    students.push(req.body);
    res.redirect('/StudentForm'); 
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
