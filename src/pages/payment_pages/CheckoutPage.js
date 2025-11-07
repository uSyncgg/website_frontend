import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Footer from "../../Footer";
 

export default function CheckoutPage() {
    // FOR LIVE
    const stripePublicKey = process.env.REACT_APP_STRIPE_PK;
    const stripePromise = loadStripe(stripePublicKey);

    // FOR TESTING
    // const stripePublicTestKey = process.env.REACT_APP_STRIPE_TK; 
    // const stripePromise = loadStripe(stripePublicTestKey);

    // BELOW IS FOR STRIPE PAYMENTS, DO NOT REMOVE DO NOT UNCOMMENT
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4242/usyncPayments/generalPayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "purge-league", amount: 2625 }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'night',
        variables: {
            fontFamily: 'Sohne, system-ui, sans-serif',
            fontWeightNormal: '500',
            borderRadius: '8px',
            colorBackground: 'rgb(0,0,0)',
            colorPrimary: 'white',
            accessibleColorOnColorPrimary: 'white',
            colorText: 'white',
            colorTextSecondary: 'white',
            colorTextPlaceholder: '#ABB2BF',
            tabIconColor: 'white',
            logoColor: 'dark'
        },
        rules: {
            '.Input': {
            backgroundColor: 'rgb(93, 66, 133)',
            border: '1px solid var(--colorPrimary)'
            }
        }
    };
    // Enable the skeleton loader UI for optimal loading.
    const loader = 'auto';

    return (
    <div className="App">
        {clientSecret && (
            <Elements options={{clientSecret, appearance, loader}} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )}
        {/* <Footer /> */}
    </div>

    // <Elements stripe={stripePromise}>
    //   <CheckoutForm />
    // </Elements>
    );
}
