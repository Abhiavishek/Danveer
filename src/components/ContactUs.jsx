import React from 'react'
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
 import {faInstagram} from '@fortawesome/free-brands-svg-icons'
 import{faYoutube} from '@fortawesome/free-brands-svg-icons'
 import charity from '../assets/charity.png'
 import GoogleMaps from '../assets/GoogleMaps.jpg'
const contactus = () => {
  let data={
    "phone1": '8093240167',
    "phone2": '9534817536',
    "email": "danveer@gmail.com",
    "website":"http://danveer.com/",
    "Mon-Fri":"9.00 am-5.00 pm",
    "Saturday":"8.00 am-2.00 pm",
    "Sunday":"Closed"

  }
  return (
    <div className='h-[100vh] w-[100vw] bg-[rgb(37,16,71)] text-[white] flex justify-evenly bg-gradient-to-tr'>
      <div >
      <div className='pb-4 pt-3'>
        <button className='  w-[130px] rounded-[6px] border-solid border-[1px] border-white  bg-[black] flex items-center justify-around'>
          <div>
          
          <img src={charity} className='h-[28px] bg-[white]'/>
          </div>
          <div className='text-start'>
          <p className='text-[White] text-[15px]  font-semibold'>DanVeer</p>
          </div>
        </button>
      </div>
        <p>Ph No : +91 {data.phone1}</p>
        <p> Ph No:+91 {data.phone2}</p>
        <p> Mail: {data.email}</p>
        <p> Website :{data.website}</p>
        <div >
        <FontAwesomeIcon icon={faFacebook} className=' pl-[30px] ' />
         <FontAwesomeIcon icon={faInstagram} className=' pl-[30px] pr-3' />
         <FontAwesomeIcon icon={faYoutube}  className='  relative pl-[10px] '/>  
        </div>
      </div>
      <div>
        <h1 className='text-[20px] font-semibold'>Resources</h1>
        <p>Who we are</p>
        <p>Career</p>
        <p>Gallery</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className='text-[20px] font-semibold'>
        The Map
        <img  className='h-[30vh] w-[20vw] pt-3' src={GoogleMaps} alt="" />
      </div>
      <div>
       <h1 className='text-[20px] font-semibolds'> Working Hours </h1>
       <p>Mon-Fri : {data['Mon-Fri']}</p>
       <p>Saturday: {data.Saturday}</p>
       <p> Sunday: {data.Sunday}</p>
      </div>
    </div>
  )
}

export default contactus