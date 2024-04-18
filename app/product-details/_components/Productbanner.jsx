import React from 'react'
import Image from 'next/image'
function Productbanner({product}) {
  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ?
        <Image className='border rounded-lg w-[400px] h-[400px]'
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt='banner-img'
        width={400}
        height={400}
        /> :
        <div className='h-[400px] w-[400px] bg-gray-200 rounded-lg animate-pulse'></div> }
    </div>
  )
}

export default Productbanner