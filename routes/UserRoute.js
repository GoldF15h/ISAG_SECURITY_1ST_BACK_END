const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require("../middleware/Authentication");
const superAuth = require("../middleware/SuperuserAuthentication");
const User = mongoose.model("user");

app.get("/user/:id", auth, async (req, res) => {
  let statusCode = 200;
  let statusMessage = "success";
  let message = null;

  try {
    const users = await User.find(
      {
        _id: req.params.id,
      },
      {
        _id: 1,
        name: 1,
        score: 1,
      }
    );

    message = {
      users,
    };
  } catch (err) {
    statusCode = 400;
    statusMessage = "error";
    message = err.message;
  }

  res.status(statusCode).send({
    status: statusMessage,
    message,
  });
});

app.get("/user", auth, async (req, res) => {
  let statusCode = 200;
  let statusMessage = "success";
  let message = null;

  try {
    const users = await User.find(
      {},
      {
        _id: 1,
        name: 1,
        score: 1,
      }
    );

    message = {
      users,
    };
  } catch (err) {
    statusCode = 400;
    statusMessage = "error";
    message = err.message;
  }

  res.status(statusCode).send({
    status: statusMessage,
    message,
  });
});

app.put("/user/:id", auth, async (req, res) => {
  let statusCode = 200;
  let statusMessage = "put success";
  let message = null;
  try {
    const _name = req.body.name || "empty";
    const upadateUser = await User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: _name,
      },
      {
        new: true,
        projection: {
          name: 1,
        },
      }
    );

    if (upadateUser) {
      message = {
        upadateUser,
      };
    } else {
      statusCode = 404;
      statusMessage = "error";
      message = "user not fond";
    }
  } catch (err) {
    console.log(err.message);
    statusCode = 400;
    statusMessage = "error";
    message = "bad req";
  }
  res.status(statusCode).send({
    status: statusMessage,
    message,
  });
});

app.post("/user", auth, async (req, res) => {
  let statusCode = 200;
  let statusMessage = "usercreate success";
  let message = null;

  // console.log(req.file);

  try {
    // console.log("req body", req.body, "end");
    const newUser = new User({
      name: req.body.name,
      score: 0,
    });
    // console.log(newUser);
    await newUser.save();

    statusCode = 200;
    statusMessage = "success";
    message = "usercreate created success";
  } catch (error) {
    statusCode = 400;
    statusMessage = "error";
    message = error.message;
  }

  res.status(statusCode).send({
    status: statusMessage,
    message,
  });
});

module.exports = app;
