import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Donate = () => {
  return (
    <div>
    <Link to='/dashboard'><FaBars className='h-7 w-11 m-3'/></Link> 
   </div>
  )
}

export default Donate