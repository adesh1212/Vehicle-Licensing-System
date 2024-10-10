// models/Owner.js
const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true, // Ensure the ID is required
  },
  name: {
    type: String,
    required: true, // Ensure name is required
  },
  address: {
    type: String,
    required: true, // Ensure address is required
  },
  contact: {
    type: String,
    required: true, // Ensure contact is required
  },
});

module.exports = mongoose.model("Owner", ownerSchema);
