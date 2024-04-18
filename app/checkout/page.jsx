"use client"
import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./_components/CheckoutForm"
import { useSearchParams } from 'next/navigation';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);


function Chekout() {
    const searchparams = useSearchParams()
    const options ={
        mode:"payment",
        currency:"usd",
        amount: Number(searchparams.get("amount")) * 100
    }
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchparams.get("amount"))} />
    </Elements>
  )
}

export default Chekout