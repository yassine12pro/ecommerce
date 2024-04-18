"use client"
import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaTruck, FaTimes } from 'react-icons/fa';
import Loading from './Loading';
import {  useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import CartApi from "../../_utils/CartApi"
import { Cartcontext } from '../../_context/cartcontext';

function Productinfo({product}) {
  const {cart,setcart}=useContext(Cartcontext)
  const router = useRouter();
  const  {user} = useUser();
  const handeladdtocart =()=>{
    if (!user){
      router.push('/sign-in'); 
    } else{
      const data= {
        "data":{
          userName:user.fullName,
          email:user.primaryEmailAddress.emailAddress,
          products:[product?.id]

        }
      }
      CartApi.addtocart(data).then(res=>{console.log("created")
      setcart(oldcart=>[
        ...oldcart,
        {
          id:res?.data?.data?.id,
          product
        }
      ])}).catch(err=>{console.log(err)})
      
    }
    

  }
  return (
   <div>
     
     {product?.id ? <div>
      <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
      <h2 className='text-[13px] uppercase text-teal-500'> {product?.attributes?.category}</h2>
      
      <h2 className='mt-3 text-[15px] sm:mt-10'>{product?.attributes?.description[0]?.children[0].text}</h2>
      <h2 className=' flex gap-4  items-center mt-5 text-gray-500 text-[12px]'>delivery {product?.attributes?.instantdilevery ?  <FaTruck className="text-green-500 w-8 h-8 "/> : <FaTimes className="text-red-500  w-8 h-8"/> }</h2>
      <h2 className='mt-3 text-[30px] text-red-400 sm:mt-10'>${product?.attributes?.price}</h2>
      <button onClick={handeladdtocart} className='flex gap-2 items-center bg-teal-400 p-3 rounded-lg mt-2 sm:mt-10 hover:bg-teal-600 text-white'><FaShoppingCart /> Add To Cart</button>
      
  </div> :   <Loading/> }
   </div>
    
   
  )
}

export default Productinfo