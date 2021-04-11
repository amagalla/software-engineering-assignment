const express = require("express");
const router = express.Router();
const registration = require("../controller/registrationController");
const validate = require("../auth/validateInput");

// get and post share the same route
router
  .route("/registration")
  // calls registration middleware and uses the getall method to retrieve all registered users in Descending order by date
  .get(registration.getAllRegisteredUsers, (req, res) => {
    // responds locals object with saved users
    res.status(200).json(res.locals.users);
  })
  // validate middleware is to check if the input is filled properly
  // if validate is successful, then will continue to registration controller middleware to post registerer's information to database
  .post(validate.validInput, registration.postRegisteredUser, (req, res) => {
    res.status(200).json({});
  });

module.exports = router;
