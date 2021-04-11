module.exports = {
  validInput: (req, res, next) => {
    try {
      // deconstruct values from body object
      const {
        firstname,
        lastname,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      } = req.body;

      // iterate through body object
      for (let key in req.body) {
        //  checks if there are no values after triming white spaces
        if (req.body[key].trim().length < 1) {
          // tests if key is address 2 then set value to empty string then continue over it
          if (key === "address2") {
            // reset to empy string
            req.body[key] = "";
            continue;
          }

          console.log("Need to fill input");
          // tests if any value is invalid input, throw error
          throw new Error("Incomplete input");
          // checks if key is zip
        } else if (key === "zip") {
          //   checks if value of zip is not either 5 or 9
          if (req.body[key].length !== 5 && req.body[key].length !== 9) {
            //   invalid amount of numbers
            console.log("Invalid amount of numbers for zipcode");
            // throw error
            throw new Error("Only 5 or 9 numbers for zipcode allowed");
          }
          // checks if key is country
        } else if (key === "country") {
          // tests if country's value is not either US or USA
          if (req.body[key] !== "US" && req.body[key] !== "USA") {
            console.log("Country has to be US or USA");
            // throw error
            throw new Error("Country has to be US or USA");
          }
        }
      }
      // return next if values are valid
      return next();
      // catch errors
    } catch (err) {
      return next(err);
    }
  },
};
