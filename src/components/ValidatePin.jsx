import axios from 'axios';
import React, { useState } from 'react';

const ValidatePin = () => {
  let [pincode, setPincode] = useState('');
  let [state, setState] = useState('');
  let [country, setCountry] = useState('');
  let [city, setCity] = useState('');

  let handleSubmit = () => {
    if (pincode.trim() === '') {
      return;
    }

    axios.get(`https://api.postalpincode.in/pincode/${pincode}`).then((res) => {
      console.log(res.data[0]['PostOffice'][0]['Pincode']);
      setCountry(res.data[0]['PostOffice'][0]['Country']);
      setState(res.data[0]['PostOffice'][0]['State']);
      setCity(res.data[0]['PostOffice'][0]['District']);
    }).catch(() => {
      setPincode('');
    });
  };

  let handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        value={pincode}
        onChange={handlePincodeChange}
        onBlur={handleSubmit} 
        inputMode='numeric'
        style={{ appearance: 'numeric' }}
      />
      <input type="text" value={country} readOnly />
      <input type='text' value={state} readOnly />
      <input type='text' value={city} readOnly />
    </>
  );
};

export default ValidatePin;
