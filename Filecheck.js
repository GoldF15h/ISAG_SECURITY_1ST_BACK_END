const fs = require("fs");
const path = require("path");

// directory to check if exists
const imageDir = "./image";
const taskDir = "./task";

// check if directory exists
if (fs.existsSync(imageDir)) {
  //   console.log("Directory exists!");
} else {
  fs.mkdir(path.join("./", "image"), (err) => {
    if (err) {
      return console.error(err);
    }
    // console.log("Directory created successfully!");
  });
}

if (fs.existsSync(taskDir)) {
  //   console.log("Directory exists!");
} else {
  fs.mkdir(path.join("./", "task"), (err) => {
    if (err) {
      return console.error(err);
    }
    // console.log("Directory created successfully!");
  });
}
