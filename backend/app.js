const express = require("express");
const mongoose = require("mongoose");
const vehicleRoutes = require("./routes/vehicle.js");
const ownerRoutes = require("./routes/owner.js");
const licenseRoutes = require("./routes/license.js");
const paymentRoutes = require("./routes/payment.js");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

// Use Routes
app.use("/vehicles", vehicleRoutes);
app.use("/owners", ownerRoutes);
app.use("/licenses", licenseRoutes);
app.use("/payment", paymentRoutes);

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
