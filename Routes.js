const express = require("express");
const app = express();

// load model
const userModel = require("./model/User");
const flagModel = require('./model/Flag')
// use model
// app.use(xxx);

// load route
const UserRoute = require("./routes/UserRoute");
const SubmitRoute = require('./routes/SubmitRoute')
// use route
app.use(UserRoute);
app.use(SubmitRoute)
module.exports = app;
