import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { Cartcontext } from '../../_context/cartcontext';
import { useUser } from '@clerk/nextjs';
import orderapis from '../../_utils/orderapis';
import CartApi from '../../_utils/CartApi';
const CheckoutForm = ({amount}) => {
  const {cart,setcart}=useContext(Cartcontext)
  const {user}=useUser()
    const [loading, setLoading] = useState(false);
    const [errormessage, setErrorMessage] = useState()


    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error) => {
        setLoading(false)
        setErrorMessage(error.message)
    }
    createorder()
    sendemail()
    // Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
			return;
		}

    const res= await fetch("/api/create-intent",{
        method:"POST",
        body:JSON.stringify({
            amount: amount
        })
    })
    const clientSecret= await res.json()
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const createorder=()=>{
    let productids=[]
    cart.forEach(el => {productids.push(el?.product?.id)
      
    });
    let data={
      data:{
        email:user.primaryEmailAddress.emailAddress,
        username:user.fullName,
        amount,
        products:productids

      }
    }
    orderapis.createorder(data).then((res)=>{
      if (res){
        cart.forEach(el=>{CartApi.deleteitem(el?.id).then(res=>{})})
      }
    })
  }


  const sendemail= async ()=>{
    const res= await fetch("api/send-email",{
      method:"POST",
      body: JSON.stringify({
				amount: amount,
				email: user.primaryEmailAddress.emailAddress,
				fullName: user.fullName
			})
      
  })
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <div className='mx-32 md:mx-[320px] mt-12 flex flex-col'>
        <PaymentElement />
        <button className='mt-10 p-4 bg-teal-500 rounded-lg text-white '>Submit</button>
      </div>
      
    </form>
  );
};

export default CheckoutForm;