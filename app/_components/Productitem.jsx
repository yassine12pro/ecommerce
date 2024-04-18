import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Productitem({product}) {
  return (
    <Link href={`/product-details/${product?.id}`}>
        <div  className='hover:border hover:shadow-md rounded-lg border-teal-400 p-1 hover:cursor-pointer'>
        <Image src={product?.attributes?.banner?.data?.attributes?.url}
         alt='banner' width={400} height={350} className='h-[200px] object-fit border border-black-400 rounded-t-lg' />
         <div className='flex items-center justify-between p-3 bg-gray-50 rounded-b-lg'>
            <div >
                <h2 className='text-[16px] line-clamp-1'>{product?.attributes?.title}</h2>
                <h2 className='uppercase text-teal-500 text-[10px]'>{product?.attributes?.category}</h2>
            </div>
            <h2 className='text-red-400'>${product?.attributes?.price}</h2>
         </div>
      </div>
    </Link>
    
    
  )
}

export default Productitem