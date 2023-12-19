import React, { useState } from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
const Page = () => {
    const [password, setPassword]= useState(false);
    const handleClick = ()=>{
        setPassword(!password)
    }
  return (
   <div className='mb-4'>
    <label className='block text-sm font-medium text-gray-600 mb-2' >Password : </label>
    <div className='flex items-center'>
        <input className='w-full p-2 border-gray-300 rounded-md focus:outline-none' placeholder='Password' type={password ? 'password': 'text'} />
        <div className='-ml-10 cursor-pointer'>
          {password?(<LuEye onClick={handleClick}/>):(<LuEyeOff onClick={handleClick}/>)}
        </div>
    </div>
   </div>
  )
}

export default Page