// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51Q8NoCLW3AQlV0sE8EMXGW3fQIBaBcO8MvWU2BYiazlCscHFwGyeY13kYqvYLoipB7I6Y7xsh8wE7fayanXNd4Wl00rzTGLfgP"
); // Replace with your actual secret key

// Create a payment intent
router.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body; // Get the amount from the request body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects the amount in cents
      currency: "usd", // Change to your desired currency
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
