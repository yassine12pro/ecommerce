import React ,{ useContext }  from 'react'
import { Cartcontext } from '../_context/cartcontext'
import Link from 'next/link'





function Cart() {
    const {cart,setcart}=useContext(Cartcontext)
    
  return (
    <div className='h-[300px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart?.map((item)=>
                        (
                            <li className="flex items-center gap-4">
                            <img
                              src={item?.product?.attributes?.banner?.data?.attributes?.url}
                              alt=""
                              className="size-16 rounded object-cover"
                            />
                            
                            <div>
                              <h3 className="text-sm text-gray-900">{item?.product?.attributes?.title}</h3>
                            
                              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                <div>
                                  <dt className="inline">category: </dt>
                                  <dd className="inline">{item?.product?.attributes?.category}</dd>
                                </div>
                            
                                <div>
                                  <dt className="inline">price: </dt>
                                  <dd className="inline">${item?.product?.attributes?.price}</dd>
                                </div>
                              </dl>
                            </div>
                            </li>
                        )
                        
                    
                     
                    )}
               
                </ul>
            </div>
            <div className="space-y-4 text-center">
                

                <Link
                    href="/cart"
                    className="mt-5 block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                    View my cart ({cart?.length})
                </Link>

                <a
                    href="#"
                    className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                    Continue shopping
                </a>
            </div>
    </div>
  )
}

export default  Cart