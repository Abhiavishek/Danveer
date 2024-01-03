import React from 'react'
import { useState,useNavigate,useEffect } from 'react';
const VerifyReci = () => {
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
        const res = await axios.get(`http://localhost:8080/recipients/verified?verified=${verified}`);
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
    <div>
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
                  <td className="py-2 px-4">{x.address}</td>
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
    </div>
  )
}

export default VerifyReci