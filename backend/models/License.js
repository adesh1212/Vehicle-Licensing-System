// models/License.js
const mongoose = require("mongoose");

const licenseSchema = new mongoose.Schema({
  owner: String,
  vehicle: String,
  licenseNumber: String,
  licenseType: String,
  expirationDate: Date,
});

module.exports = mongoose.model("License", licenseSchema);
