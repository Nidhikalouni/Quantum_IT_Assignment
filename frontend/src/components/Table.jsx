
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Protect the page: redirect to login if no user/token
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null; // Prevent rendering before checking user

  // Dummy data for table
  const dummyUsers = [
    { name: "Michael Holz", dob: "04/10/2013", email: "michael@example.com" },
    { name: "Paula Wilson", dob: "05/08/2014", email: "paula@example.com" },
    { name: "Antonio Moreno", dob: "11/05/2015", email: "antonio@example.com" },
  ];

  // Merge logged-in user with dummy data
  const tableData = [user, ...dummyUsers];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Welcome, {user.name}</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Date of Birth</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Password</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {tableData.map((u, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{u.name}</td>
                <td className="py-2 px-4">{u.dob}</td>
                <td className="py-2 px-4">{u.email}</td>
                <td className="py-2 px-4">{index === 0 ? "••••••••" : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
