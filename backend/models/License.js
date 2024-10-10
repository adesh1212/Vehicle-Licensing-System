// // models/License.js
// const mongoose = require("mongoose");

// const licenseSchema = new mongoose.Schema({
//   owner: String,
//   vehicle: String,
//   licenseNumber: String,
//   licenseType: String,
//   expirationDate: Date,
// });

// module.exports = mongoose.model("License", licenseSchema);

const mongoose = require("mongoose");

const licenseSchema = new mongoose.Schema({
  owner: { type: String, required: true }, // Owner's ID
  vehicle: { type: String, required: true }, // Vehicle's ID
  licenseNumber: { type: String, required: true },
  licenseType: { type: String, required: true },
  expirationDate: { type: Date, required: true },
  paymentId: { type: String, required: true }, // Store Stripe Payment ID
  paymentStatus: { type: String, default: "pending" }, // e.g., 'success', 'failed', 'pending'
});

module.exports = mongoose.model("License", licenseSchema);

