import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-[#f7f0f0] h-[10vh] flex items-center justify-center'>
        <Link className='p-5 font-bold text-xl text-teal-600' to='/'>Home</Link>
        <Link className='p-5 font-bold text-xl text-cyan-400' to='/contactus'>Contact Us</Link>
        <Link className='p-5 font-bold text-xl text-blue-900' to='/registerhelper'>Register as Helper</Link>
        <Link className='p-5 font-bold text-xl text-pink-800'>Donate</Link>
    </div>
  )
}

export default Nav