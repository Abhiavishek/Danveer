import React from 'react'
import charity from '../assets/charity.png'
const Banner = () => {
  return (
    <div  className='h-[80vh] w-[100vw] bg-slate-500 relative'>
        <img src={charity} className='h-[80vh] w-[100vw]'></img>
    </div>
  )
}

export default Banner