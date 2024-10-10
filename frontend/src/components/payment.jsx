import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // Fetch the client secret when the component mounts
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/payment/create-payment-intent",
          {
            amount,
          }
        );
        setClientSecret(response.data.clientSecret); // Set the client secret from the response
      } catch (error) {
        setError("Failed to load payment information.");
      }
    };

    fetchClientSecret();
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError("");

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setError(error.message); // Show error message
      setProcessing(false);
    } else {
      // Payment was successful
      onSuccess(paymentIntent); // Call the onSuccess function passed from LicenseManagement
      setProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-lg shadow-md bg-white"
    >
      <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
      <CardElement className="border p-2 mb-4" />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-blue-600 text-white rounded-lg p-2"
      >
        Pay ${amount}
      </button>
    </form>
  );
};

export default PaymentForm;
