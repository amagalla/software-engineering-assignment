const express = require("express");
const router = express.Router();
const registration = require("../controller/registrationController");
const validate = require("../middleware/validateInput");

router
  .route("/registration")
  .get(registration.getAllRegisteredUsers, (req, res) => {
    res.status(200).json(res.locals.users);
  })
  .post(validate.validInput, registration.postRegisteredUser, (req, res) => {
    res.status(200).json({});
  });

module.exports = router;
