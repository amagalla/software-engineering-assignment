const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// process port from hosting site or fallback to local port
const PORT = process.env.PORT || 5000;

// require routes
const registrationRouter = require("./server/routes/registrationRouter");

// parse body
app.use(cors());
app.use(express.json());

// define url routes

// this is the main (first page route)
// app.use(express.static(path.join(__dirname, "dist")));

// define routes
app.use("/users", registrationRouter);

// error handling
app.use("*", (req, res) => {
  console.log("We are in a bad route");
  res.status(404);
});

// global error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
