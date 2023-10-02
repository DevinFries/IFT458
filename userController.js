const Loan = require('./../models/userModel');
const DatabaseQuery = require('./../dbManager/dbQuery');

exports.getAllLoans = async (req, res, next) => {
  try {
    const loans = await Loan.find();
    res.status(200).json({
      status: 'success',
      results: loans.length,
      data: {
        loans
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.createLoan = async (req, res) => {
  try {
    const newLoan = await Loan.create({
      customerName: req.body.customerName,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      loanAmount: req.body.loanAmount,
      interest: req.body.interest,
      loanTermYears: req.body.loanTermYears,
      loanType: req.body.loanType,
      description: req.body.description
    });

    console.log('New Loan Request Data:', req.body);


    res.status(201).json({
      status: 'success',
      data: newLoan
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getLoan = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

exports.updateLoan = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};

exports.deleteLoan = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};


