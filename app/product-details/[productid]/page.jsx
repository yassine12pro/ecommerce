"use client"

import React, { useEffect, useState } from 'react'
import ProductApis from '../../_utils/ProductApis'
import Breadcrumb from '../../_components/breadcrumb'
import Productbanner from '../_components/Productbanner'
import Productinfo from '../_components/Productinfo'
import Productlist from "../../_components/Productlist"
function Productdetails({params}) {
    const [productdetails,setproductdetails]=useState({})
    const [productlist,setproductlist]=useState([])
    useEffect(()=>{
        getproductbyid_()
    },[params?.productid])

    const getproductbyid_ =()=>{
        ProductApis.getproductbyid(params?.productid).then(res=>{console.log(res.data.data)
            setproductdetails(res.data.data)
            getproductlistbycategory(res.data.data)
        }
    )
        
    }

    const getproductlistbycategory=(product)=>{
        ProductApis.getproductbycategory(product?.attributes.category).then(res=>{
            console.log(res?.data?.data)
            setproductlist(res?.data?.data)
        })
    }
  return (
    <div className='p-[30px]  '>
        <Breadcrumb id={params?.productid}/>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 justify-around items-center gap-5 sm:gap-0'>
            <Productbanner product={productdetails}/>
            <Productinfo product={productdetails}/>
        </div>
        <div>
        {productlist.length!==1 ?
            <div><h2 className='mt-20 mb-10 text-xl'>Similar Products : </h2>
            <Productlist productlist={productlist}/></div> :<></>}
            
        </div>
        
    </div>
  )
}

export default Productdetails