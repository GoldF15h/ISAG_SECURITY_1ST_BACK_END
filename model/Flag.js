const mongoose = require("mongoose")
const {Schema} = mongoose

const flagSchema = new Schema({
  ID: {
    type: String,
  },
  title: {
    type: String,
  },
});

mongoose.model("flag",flagSchema)
