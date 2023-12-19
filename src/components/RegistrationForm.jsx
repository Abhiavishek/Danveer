import React, { useState } from "react";
import axios from "axios";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState([]);
  const [pincode, setPincode] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [epassword, setEpassword]= useState(false);
  const [password, setPassword]=useState("")
  const handleClick = ()=>{
      setEpassword(!epassword)
  }

  let data = { name, phone, email, state, district, pincode, address, country,password };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/helpers`, data)
      .then(() => {
        alert("successfully registered");
        window.location.reload();
      })
      .catch(() => {
        alert("invalid data");
        window.location.reload();
      });
  };

  // const handleStateChange = (event) => {
  //   const selectedStateCode = event.target.value;
  //   const selectedStateObj = States.find((State) => State.code === selectedStateCode);

  //   setSelectedState(selectedStateCode);
  //   setDistricts(selectedStateObj ? selectedStateObj.districts : []);
  // };

  let handleOnBlur = () => {
    if (pincode.trim() === "") {
      return;
    }

    axios
      .get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => {
        console.log(res.data[0]["PostOffice"][0]["Pincode"]);
        setCountry(res.data[0]["PostOffice"][0]["Country"]);
        setState(res.data[0]["PostOffice"][0]["State"]);
        setDistrict(res.data[0]["PostOffice"][0]["District"]);
      })
      .catch(() => {
        setPincode("");
      });
  };

  const handlePinCodeChange = (event) => {
    const enteredPinCode = event.target.value;
    setPincode(enteredPinCode);

    const pinCodeRegex = /^\d{6}$/;

    if (!pinCodeRegex.test(enteredPinCode)) {
      setPinCodeError("Invalid PIN Code");
      setCountry("");
      setState("");
      setDistrict("");
    } else {
      setPinCodeError("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md mt-5">
      <h1 className="text-2xl font-semibold mb-4">Registration Form</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Full Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Phone:
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter Phone Number"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Password :{" "}
        </label>
        <div className="flex items-center">
          <input
            className="w-full p-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Password"
            type={epassword ? "password" : "text"} onChange={(e)=>{
              setPassword(e.target.value);
            }}
          />
          <div className="-ml-10 cursor-pointer">
            {!epassword ? (
              <LuEye onClick={handleClick} />
            ) : (
              <LuEyeOff onClick={handleClick} />
            )}
          </div>
        </div>
      </div>

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

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          PinCode:
        </label>
        <input
          type="number"
          value={pincode}
          onChange={handlePinCodeChange}
          onDoubleClick={handleOnBlur}
          placeholder="Enter Pincode"
          className={`w-full p-2 border rounded-md focus:outline-none ${
            pinCodeError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {pinCodeError && (
          <p className="text-red-500 text-sm mt-1">{pinCodeError}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Country:
        </label>
        <input
          type="text"
          value={country}
          placeholder="Enter Country"
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          State :
        </label>
        <input
          type="text"
          value={state}
          placeholder="Enter State"
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          City :
        </label>
        <input
          type="text"
          value={district}
          placeholder="Enter City"
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Address:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none resize-none"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="2"
        ></textarea>
      </div>

      <div>
        <button
          className="w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
