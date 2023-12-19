import axios from 'axios';
import React, { useState } from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Link } from 'react-router-dom';
const LoginHelper = () => {
  const[epassword, setEpassword] = useState(false);
  const [password, setPassword] = useState('');
  const[email, setEmail] = useState('');
  const handleClick = ()=>{
    setEpassword(!epassword)
}
 const handleOnclick=(e)=>{
   e.preventDefault();
   axios.post(`http://localhost:8080/helpers/verifyByEmail?email=${email}&password=${password}`).then((res)=>{
    localStorage.setItem('helpers',JSON.stringify(res.data.data));
    alert("verified Successfully")
   }).catch(()=>{
    alert("Invalid Email and password");
   })
 }
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md mt-5">
    <h1 className="text-2xl font-semibold mb-4">Login Form</h1>
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
      <div className="mb-10">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Password :{" "}
        </label>
        <div className="flex items-center">
          <input
            className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Password"
            type={!epassword ? "password" : "text"} onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
          <div className="-ml-10 cursor-pointer">
            {epassword ? (
              <LuEye onClick={handleClick} />
            ) : (
              <LuEyeOff onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <button
          className="w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          onClick={handleOnclick}
        >
          Login
        </button>
      </div>
      <div className='mb-4'>
      <Link className=' text-gray-600'to='/registrationform'>New around here <span><button>Register</button></span></Link>
      </div>
      <div className='mb-4'>
      <Link className=' text-gray-600'>Forgot password?</Link>
      </div>
    </div>
  )
}

export default LoginHelper