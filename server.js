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

// parses body to recognize request object as json
app.use(express.json());
// cross share to allow http request from the frontend
app.use(cors());

// declare routes
app.use("/users", registrationRouter);

/* DEFINE URL ROUTES */

// this is the main (first page route)
app.use(express.static(path.join(__dirname, "dist")));
// registration route
app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// confirmation route
app.get("/confirmation", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// confirmation adminreport
app.get("/adminreport", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// any route not defined, falls back to page not found page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* END OF DEFINING URL ROUTES */

// error handler
app.use(errorhandler);

// port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
