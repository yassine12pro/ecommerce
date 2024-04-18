"use client"
import React, { useEffect, useState } from 'react'
import Productlist from "./Productlist"
import axiosClient from '../_utils/axiosClient'
import ProductApis from '../_utils/ProductApis'

function Productsection() {
    const [productlist,setproductlist]=useState([])
    useEffect(()=>{
        getLatestProduct_()
    },[])
    const getLatestProduct_ = ()=>{
        ProductApis.getLatestProduct().then(res=>{
            console.log(res.data.data)
            setproductlist(res?.data?.data)
        })

}

  return (
    <div className='px-10 md:px-20 '>
        <h1 className='m-[50px]  text-[150%] grr'>Our Latest Products : </h1>
        <Productlist productlist={productlist}/>
    </div>
  )
}

export default Productsection