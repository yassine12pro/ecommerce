"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from "next/image"
import { UserButton, useUser } from '@clerk/nextjs'
import { FaShoppingCart } from 'react-icons/fa';
import { Cartcontext } from '../_context/cartcontext';
import CartApi from '../_utils/CartApi';
import Cart from "./Cart"

function Header() {
    const [visibility,setvisibility]=useState(false)
    const togglevisibility=()=>{
        setvisibility(!visibility)
    }
    const {cart,setcart}=useContext(Cartcontext)
    const [logedin,setlogedin]=useState(false)
    useEffect(()=>{
        setlogedin(window.location.href.toString().includes("sign-in"))
    },[])
  const  {user} = useUser();
  useEffect(()=>{
    user && getcartitems()
  },[user])
  const getcartitems=()=>{
    CartApi.getusercartitems(user.primaryEmailAddress.emailAddress).then(res=>{console.log(res?.data?.data)
        res?.data?.data.forEach(citem=>{
            setcart((oldcart)=>[
                ...oldcart,
                {
                    id:citem.id,
                    product:citem?.attributes?.products?.data[0]
                }
            ])
        })
    })

  }

  return !logedin && (
    <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
            <a href='/'><Image src="/logo.svg" width={50} height={50}/></a> 

            <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About Us </a>
                </li>

                <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
                </li>

                
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <div >
                    {!user ?  <div className="sm:flex sm:gap-4"> <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href="/sign-in"
                >
                    Login
                </a>

                <a
                    className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 sm:block"
                    href="#"
                >
                    Register
                </a> </div> : 
                <div className='flex items-center gap-4'>  <h2 className='flex items-center '> <FaShoppingCart onClick={togglevisibility} className='w-7 h-10 text-teal-500 cursor-pointer' /> ({cart?.length})</h2> <UserButton/> {visibility && <Cart/> } </div>
                 }
               
                </div>

                <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                >
                <span className="sr-only">Toggle menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header