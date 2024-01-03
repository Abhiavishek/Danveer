import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import charity from '../assets/charity.png';
import GoogleMaps from '../assets/GoogleMaps.jpg';

const ContactUs = () => {
  let data = {
    phone1: '8093240167',
    phone2: '9534817536',
    email: 'danveer@gmail.com',
    website: 'http://danveer.com/',
    'Mon-Fri': '9.00 am-5.00 pm',
    Saturday: '8.00 am-2.00 pm',
    Sunday: 'Closed',
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 text-white flex justify-evenly relative">
      <div className="text-center">
        <div className="pb-4 pt-3">
          <button className="w-[130px] rounded-[6px] border-solid border-[1px] border-white bg-black flex items-center justify-around focus:outline-none">
            <div>
              <img src={charity} className="h-8 bg-white" alt="Logo" />
            </div>
            <div className="text-start">
              <p className="text-white text-[15px] font-semibold">DanVeer</p>
            </div>
          </button>
        </div>
        <p className="mb-2">Ph No: +91 {data.phone1}</p>
        <p className="mb-2">Ph No: +91 {data.phone2}</p>
        <p className="mb-2">Mail: {data.email}</p>
        <p className="mb-2">Website: {data.website}</p>
        <div className="flex space-x-3 mt-3">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500 cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500 cursor-pointer" />
          <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-[20px] font-semibold mb-2">Resources</h1>
        <p className="mb-1">Who we are</p>
        <p className="mb-1">Career</p>
        <p className="mb-1">Gallery</p>
      </div>
      <div className="text-center">
        <h1 className="text-[20px] font-semibold mb-2">The Map</h1>
        <img className="h-48 w-48 mx-auto mt-2 rounded-lg shadow-md" src={GoogleMaps} alt="Google Maps" />
      </div>
      <div className="text-center">
        <h1 className="text-[20px] font-semibold mb-2">Working Hours</h1>
        <p className="mb-1">Mon-Fri: {data['Mon-Fri']}</p>
        <p className="mb-1">Saturday: {data.Saturday}</p>
        <p className="mb-1">Sunday: {data.Sunday}</p>
      </div>
    </div>
  );
};

export default ContactUs;
