const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', true);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
    //useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//routes
const loanRoute = require('./routes/userRoutes');
app.use('/loans', loanRoute);

const { NODE_ENV, PORT, DATABASE, DATABASE_PASSWORD } = process.env;

// Build the database connection string based on environment variables
const dbConnectionString = `${DATABASE}${NODE_ENV === 'development' ? '' : `?retryWrites=true&w=majority`}`;

// Asynchronous Database connection
mongoose
  .connect(dbConnectionString, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB connection succeeded with ${DATABASE}...`))
  .catch((err) => console.log('Error in DB connection: ' + err));

console.log(`The DB connection string is: ${dbConnectionString}`);

