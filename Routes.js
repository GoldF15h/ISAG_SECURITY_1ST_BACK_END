const express = require("express");
const app = express();

// load model
const userModel = require("./model/User");

// use model
// app.use(xxx);

// load route
const UserRoute = require("./routes/UserRoute");

// use route
app.use(UserRoute);

module.exports = app;
