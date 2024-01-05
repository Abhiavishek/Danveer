import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import defaultProfileImage from '../assets/images.png';

const RecipientProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ upiId, setUpiId] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState();
  const [status, setStatus] = useState("");
  const [verified, setVerified] = useState();
  const [id, setId] = useState();
  const[bankAccountNumber, setBankAccountNumber]=useState("");
  const[ifscCode, setIfscCode]=useState("");
  const [profileData, setProfileData] = useState();
  const { index } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/recipients/${index}`)
      .then((res) => {
        setLoading(false);
        setProfileData(res.data.data);
        const { name, phone, address, country, district, upiId, status, pincode, state, id, password ,verified,bankAccountNumber,ifscCode} = res.data.data;
        setName(name);
        setPhone(phone);
        setAddress(address);
        setCountry(country);
        setDistrict(district);
        setUpiId(upiId);
        setStatus(status);
        setPincode(pincode);
        setState(state);
        setId(id);
        setPassword(password);
        setVerified(verified);
        setBankAccountNumber(bankAccountNumber);
        setIfscCode(ifscCode)
      })
      .catch(() => {
        setError('Something went wrong');
        setLoading(false);
      });
  }, [index]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/recipients/${index}`)
      .then(() => {
        alert("Spam Donar deleted");
        navigate('/getrecipient')
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  const handleVerified = () => {
    const data = { name, upiId, phone, state, country, verified:1, pincode, address, status, id, district, bankAccountNumber,ifscCode };
    axios.put(`http://localhost:8080/recipients`, data)
      .then(() => {
        alert("Donar Verified Successfully");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md flex justify-between w-[60vw]">
        <div className="w-[40vw]">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="font-semibold">Name:</td>
                <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">upiId:</td>
                <td><input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">Bank Account Number:</td>
                <td><input type="text" value={bankAccountNumber} onChange={(e) => setBankAccountNumber(e.target.value)} className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">ifsc:</td>
                <td><input type="text" value={ifscCode} onChange={(e) => setIfscCode(e.target.value)} className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">Phone:</td>
                <td><input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">Status:</td>
                <td><input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">Country:</td>
                <td><input type="text" value={country} onChange={(e) => setCountry(e.target.value)} readOnly className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold pr-10">PinCode:</td>
                <td><input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} readOnly className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">City:</td>
                <td><input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} readOnly className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">State:</td>
                <td><input type="text" value={state} onChange={(e) => setState(e.target.value)} readOnly className="input-field" /></td>
              </tr>
              <tr>
                <td className="font-semibold">Address:</td>
                <td><input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="input-field" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[20vw] ml-8">
          <img
            src={profileData.profile_image || defaultProfileImage}
            alt="Profile"
            className="rounded-lg h-40 w-full object-cover mb-4"
          />
          <div className="flex space-x-4 justify-between">
            <button
              className={`bg-${verified ? 'green' : 'blue'}-500 hover:bg-${verified ? 'green' : 'blue'}-700 text-white font-bold py-2 px-4 rounded`}
              onClick={()=>
                handleVerified()
              }
              disabled={verified}
            >
              {verified ? 'Verified' : 'Verify'}
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete} disabled={verified}>
              Spam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientProfile;
