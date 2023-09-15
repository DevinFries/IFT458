//Name: Devin Fries
//Student ID: 1219677836
//Date: 9/14/2023

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use(cors({ origin: 'http://localhost:3000' }));

// Define a simple GET route for testing
app.get('/', (req, res) => {
  res.send('This is a test route.');
});

// Define a route to create a new SalesProduct
app.post('/sales', (req, res) => {
  // You can access request data from req.body
  const { productName, price, quantity } = req.body;

  // Validate the data (you can use a library like Joi or perform custom validation)

  // Create a new SalesProduct object (assuming you have a SalesProduct model)
  const newSalesProduct = new SalesProduct({
    productName,
    price,
    quantity,
  });

  newSalesProduct.save()
    .then(savedProduct => {
      // Respond with the newly created SalesProduct
      res.status(201).json(savedProduct);
    })
    .catch(error => {
      // Handle any errors that occur during database interaction
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
