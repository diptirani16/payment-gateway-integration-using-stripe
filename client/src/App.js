import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'
import './App.css';

toast.configure();

function App() {

  useEffect(() => {
    console.log(process.env)
  }, [])

  async function handleToken (token) {
    await fetch('http://localhost:8080/checkout', {
      method: 'POST',
      headers: {
        "Accept": "application/json"
      },
      body: {
        token,
        amount: 50000.00
      }
    })
  }
      
  return (
    <>
      <div className="container">
        <StripeCheckout
          stripeKey={process.env.REACT_APP_PUBLISH_KEY}
          token={handleToken}
          amount={50000.00}
        />
      </div>
    </>
  )
}

export default App;
