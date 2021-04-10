const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// process port from hosting site or fallback to local port
const PORT = process.env.PORT || 5000;

// require routes
const registrationRouter = require("./server/routes/registrationRouter");

// require error handling
const { errorhandler } = require("./server/error-handling/error-handler");

// parse body
app.use(cors());
app.use(express.json());

// define url routes

// this is the main (first page route)
// app.use(express.static(path.join(__dirname, "dist")));

// define routes
app.use("/users", registrationRouter);

// error handler
app.use(errorhandler);

// port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
