const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

connectToDB().catch((err) => console.log(err));
async function connectToDB() {
  await mongoose.connect("mongodb://localhost:27017/sec1st");
}

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", require("./Routes"));

app.listen(5000, () => {
  console.log("app listening at PORT " + PORT);
});
