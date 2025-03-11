import React from 'react'
import image from './image.png'
import homepage from './homepage.png'
const Red = () => {
  return (
    <div className='w-full'>
      <img src={homepage} className='relative w-full'/>
      <button className='absolute top-[725px] left-[475px] text-red-600 bg-yellow-300 rounded-xl px-36 py-9'>HELLO</button>
    </div>
  )
}

export default Red
12