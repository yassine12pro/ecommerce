import React from 'react'

function Loading() {
  return (
    <div className='flex flex-col gap-[40px]'>
        <div className='w-[40%] h-[30px] bg-gray-200 animate-pulse'></div>
        <div className='w-[80%] h-[50px] bg-gray-200 animate-pulse'></div>
        <div className='w-[40%] h-[30px] bg-gray-200 animate-pulse'></div>
        <div className='w-[40%] h-[30px] bg-gray-200 animate-pulse'></div>
        <div className='w-[40%] h-[30px] bg-gray-200 animate-pulse'></div>

    </div>
  )
}

export default Loading