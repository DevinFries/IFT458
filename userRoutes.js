const express = require('express');
const userController = require('./../controllers/userController'); 

const router = express.Router();

router
  .route('/')
  .get(userController.getAllLoans) // Use getAllLoans for retrieving loans
  .post(userController.createLoan); // Use createLoan for creating loans

router
  .route('/:id')
  .get(userController.getLoan) // Use getLoan for retrieving a specific loan
  .patch(userController.updateLoan) // Use updateLoan for updating a specific loan
  .delete(userController.deleteLoan); // Use deleteLoan for deleting a specific loan

module.exports = router;
