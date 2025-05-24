import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Footer from "../../Footer";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false); // <-- track checkbox state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !agreed) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://usync.gg/complete", // Change to valid usync url when ready for prod
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <>
      <div className="checkout-div" style={{ backgroundColor: 'rgb(49,49,49)', color: 'rgb(255,255,255)' }}>
          <form id="payment-form" className="payform" onSubmit={handleSubmit}>

          <PaymentElement id="payment-element" options={paymentElementOptions} />
          {/* Terms and Conditions checkbox */}
          <label style={{ display: "block", marginTop: "1rem", color: 'rgb(255,255,255)', fontSize: '10px' }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />{" "}
            I acknowledge that (i) payments for tickets, registrations, and donations related to events 
            listed on uSync.gg will be directed to the Event Organizer, (ii) uSync.gg will charge a platform fee of 5% 
            on the total payment made to the Event Organizer; and (iii) uSync.gg is not responsible for the deliverability 
            or quality of the Event.
          </label>

          <button disabled={isLoading || !stripe || !elements || !agreed} id="submit" className="paybutton">
              <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pay $315.00 now"}
              </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
          </form>
      </div>
      <Footer />
    </>
  );
}