const mongoose = require("mongoose");

const alertSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  criteria: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("alerts", alertSchema);
