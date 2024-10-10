import React, { useEffect, useState } from "react";
import axios from "axios";

const OwnerList = () => {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch owners from the backend
  useEffect(() => {
    const fetchOwners = async () => {
        try {
        setLoading(true)
        const response = await axios.get("http://localhost:8000/owners");
        setOwners(response.data);
            console.log(response.data);
            setLoading(false);
      } catch (error) {
            console.error("Error fetching owners:", error);
            setError(error)
      }
    };

    fetchOwners();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading owners...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Registered Owners</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Address</th>
              <th className="py-2 px-4 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner) => (
              <tr key={owner.id} className="border-t">
                <td className="py-2 px-4">{owner.id}</td>
                <td className="py-2 px-4">{owner.name}</td>
                <td className="py-2 px-4">{owner.address}</td>
                <td className="py-2 px-4">{owner.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerList;
