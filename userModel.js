const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const loanSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, 'Customer name is required.'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required.'],
  },
  address: {
    type: String,
    required: [true, 'Address is required.'],
  },
  loanAmount: {
    type: Number,
    required: [true, 'Loan amount is required.'],
  },
  interest: {
    type: Number,
    required: [true, 'Interest rate is required.'],
  },
  loanTermYears: {
    type: Number,
    required: [true, 'Loan term in years is required.'],
  },
  loanType: {
    type: String,
    required: [true, 'Loan type is required.'],
  },
  description: String,
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;

