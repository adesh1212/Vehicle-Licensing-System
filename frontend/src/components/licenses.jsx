import React, { useEffect, useState } from "react";
import axios from "axios";

const LicenseList = () => {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch licenses from the backend
  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/licenses");
        console.log(response) // Adjust the API endpoint if necessary
        setLicenses(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch licenses");
        setLoading(false);
      }
    };

    fetchLicenses();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading licenses...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Registered Licenses
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">License Number</th>
              <th className="py-3 px-4 text-left">Owner ID</th>
              <th className="py-3 px-4 text-left">Vehicle ID</th>
              <th className="py-3 px-4 text-left">License Type</th>
              <th className="py-3 px-4 text-left">Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {licenses.map((license) => (
              <tr key={license.id} className="border-t hover:bg-gray-100">
                <td className="py-2 px-4">{license.licenseNumber}</td>
                <td className="py-2 px-4">{license.owner}</td>
                <td className="py-2 px-4">{license.vehicle}</td>
                <td className="py-2 px-4">{license.licenseType}</td>
                <td className="py-2 px-4">
                  {new Date(license.expirationDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LicenseList;
