const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
  schedule: { type: [String], required: true },
  method: { type: String, required: true },
});

module.exports = mongoose.model("Class", ClassSchema);
