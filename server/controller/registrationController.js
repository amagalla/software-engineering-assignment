const db = require("../database/postgresdb");

module.exports = {
  getAllRegisteredUsers: async (req, res, next) => {
    try {
      // create query to get all users by DESC order by date
      const getUsers = "SELECT * FROM registration ORDER BY date DESC";
      // await request to database and assign values to users
      const users = await db.query(getUsers);
      // server data rows to local.users to pass onto next middleware
      res.locals.users = users.rows;
      return next();
      // catch any errors and return errors
    } catch (err) {
      return next(err);
    }
  },
  postRegisteredUser: async (req, res, next) => {
    try {
      // destructure body values
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
      // create insert query to db
      const postUser = `INSERT INTO registration 
        (firstname, lastname, address1, address2, city, state, zip, country)
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8)`;
      // await post query with values from body
      await db.query(postUser, [
        firstname,
        lastname,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      ]);
      return next();
      // catch errors
    } catch (err) {
      return next(err);
    }
  },
};
