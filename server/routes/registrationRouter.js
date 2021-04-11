const express = require("express");
const router = express.Router();
const registration = require("../controller/registrationController");
const validate = require("../middleware/validateInput");

// get and post share the same route
router
  .route("/registration")
  .get(registration.getAllRegisteredUsers, (req, res) => {
    res.status(200).json(res.locals.users);
  })
  // validate middleware is to check if the input is filled properly
  // if validate is successful, then to to registration controller to post registerer's information
  .post(validate.validInput, registration.postRegisteredUser, (req, res) => {
    res.status(200).json({});
  });

module.exports = router;
