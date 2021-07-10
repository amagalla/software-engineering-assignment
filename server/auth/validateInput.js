module.exports = {
  validInput: (req, res, next) => {
    const valArray = Object.values(req.body);
    const required = valArray[valArray.length - 1];
    try {
      // iterate through body object
      for (let key in req.body) {
        //  checks if there are no values after triming white spaces
        if (key === "required") continue;
        if (req.body[key].trim().length < 1) {
          // tests if key is address 2 then set value to empty string then continue over it
          if (key === "address2" && required === "false") {
            // reset to empy string
            req.body[key] = "";
            continue;
          }
          // throw an error and send message what the error is
          throw new Error("Incomplete input");
        } else if (
          key === "firstname" ||
          key === "lastname" ||
          key === "city" ||
          key === "state"
        ) {
          // checks if input value doesn't contain letters
          if (!/^[a-zA-Z]/.test(req.body[key].trim())) {
            // throw an error and send message what the error is
            throw new Error(
              "First Name - Last Name - City - State - Country inputs only allows letters"
            );
          }
        } else if (key === "address1" || key === "address2") {
          // checks if characters are not letters or numbers
          if (!/^[A-Za-z0-9]/.test(req.body[key].trim())) {
            // throw an error and send message what the error is
            throw new Error(
              "Only numbers and letters allows for Address inputs"
            );
          }
          // check if key is zip
        } else if (key === "zip") {
          // check if input value are not numbers
          if (!/^[0-9]/.test(req.body[key].trim())) {
            // throw an error and send message what the error is
            throw new Error("Only numbers allowed for zip allowed");
            // checks if value length are not either 5 or 9
          } else if (
            req.body[key].trim().length !== 5 &&
            req.body[key].trim().length !== 9
          ) {
            // throw an error and send message what the error is
            throw new Error("Only 5 or 9 numbers for zip allowed");
          }
          // checks if key is country
        } else if (key === "country") {
          // tests if country's value is not either US or us
          if (req.body[key].trim() !== "US" && req.body[key].trim() !== "us") {
            // throw an error and send message what the error is
            throw new Error("Country has to be US only");
          }
          // set value it US if lowercase letters were inputted
          req.body[key] = "US";
        }
        // trim white spaces around input and assign it as value the key's value
        console.log("I AM BEFORE LAST TRIM");
        req.body[key] = req.body[key].trim();
      }
      // return next if values are valid
      return next();
      // catch errors
    } catch (err) {
      return next(err);
    }
  },
};
