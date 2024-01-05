import axios from 'axios';
import React, { useEffect, useState } from 'react';

const VerifiedRecipient = () => {
  const [content, setContent] = useState([]);
  const [verified, setVerified] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/recipients/verified?verified=${verified}`).then((res) => {
      setContent(res.data.data);
    });
  }, [verified]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Donate</th>
          </tr>
        </thead>
        <tbody>
          {content.map((x, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 transition duration-300 cursor-pointer">
              <td className="py-2 px-4">{x.name}</td>
              <td className='py-2 px-4'>{x.status}</td>
              <td className="py-2 px-4">{x.phone}</td>
              <td className="py-2 px-4">
                {`${x.address}, ${x.district}, ${x.pincode}, ${x.state}, ${x.country}`}
              </td>
              <td className="py-2 px-4 text-violet-900 text-lg">Donate</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifiedRecipient;
