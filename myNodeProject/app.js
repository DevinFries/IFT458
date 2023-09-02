//Student Name: Devin Fries
//Student ID: 1219677836
//Date: 8/27/2023
const express = require('express');
const app = express();

const path = require('path');
const viewsPath = path.join(__dirname, 'views'); // Use path.join to create a platform-independent path

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.render('form');
});

app.use(express.urlencoded({ extended: true }));

// Handle form submissions
app.post('/submit', (req, res) => {
    console.log(req.body); // This will log form data to the console
    res.redirect('/');
});

console.log('Welcome to IFT 458')