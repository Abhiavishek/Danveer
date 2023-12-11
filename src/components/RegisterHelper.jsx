import React from 'react'
import States from './States'
const RegisterHelper = () => {
  return (
    <div>
        
            <label>Name</label>
            <input type='text' placeholder='Enter Your Name' required/>
            <label>Phone</label>
            <input type='number' placeholder='Enter Your Phone Number' required/>
            <label>Email</label>
            <input type='email' placeholder='Enter Your Email Address' required/>
            <States/>
        
    </div>
  )
}

export default RegisterHelper