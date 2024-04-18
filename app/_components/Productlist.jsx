import React from 'react'
import Productitem from './Productitem'

function Productlist({productlist}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
        {productlist.map(item=>(
            <div>
              <Productitem product={item} key={item.id}/>
            </div>

        ))}
    </div>
  )
}

export default Productlist