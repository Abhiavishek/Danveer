import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const GetDetails = () => {
  const [verified, setVerified] = useState(0);
  const [content, setContent] = useState([]);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (click) {
      fetchData();
    }
  }, [verified, click]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/donars/verified?verified=${verified}`);
      setContent(res.data.data);
    } catch (error) {
      console.log("Something went wrong in verification");
    }
  };

  const handleClick = (newVerified) => {
    setVerified(newVerified);
    setClick(true);
  };

  return (
    <>
      <div className="flex space-x-4 m-5 justify-evenly">
        <button
          onClick={() => handleClick(0)}
          className={`bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded focus:outline-none ${verified === 0 ? 'active' : ''}`}
        >
          Unverified Donor
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none ${verified === 1 ? 'active' : ''}`}
        >
          Verified Donor
        </button>
        <button
          onClick={() => handleClick(0)}
          className={`bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded focus:outline-none ${verified === 0 ? 'active' : ''}`}
        >
          Unverified Recipient
        </button>
        <button
          onClick={() => handleClick(1)}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none ${verified === 1 ? 'active' : ''}`}
        >
          Verified Recipient
        </button>
      </div>

      {click && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {content.map((x, index) => (
                <tr key={index} className="border-b  hover:bg-gray-100 ">
                  <td className="py-2 px-4">{x.name}</td>
                  <td className="py-2 px-4">{x.phone}</td>
                  <td className="py-2 px-4">{x.email}</td>
                  <td className="py-2 px-4">
                    <Link to={`/donarprofiles/${x.id}`}>
                      <span className={`px-2 py-1 text-sm rounded ${verified ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {verified ? 'Verified' : 'Verify'}
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default GetDetails;
