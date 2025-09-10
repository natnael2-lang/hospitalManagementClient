import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Fire = () => {
  const [userid, setUserId] = useState("");
  const [terminationReason, setTerminationReason] = useState("");
  const [employee, setEmployee] = useState(null); // Changed to null to represent no employee initially
  const [employees, setEmployees] = useState([]); // New state variable to hold multiple employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/employee");
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`this is in front end ${userid.trim()}`);
    try {
      const response = await axios.get(
        `/search/${userid.trim()}`
      );
      setEmployee(response.data);
      console.log("user found man !");
    } catch (error) {
      console.log("user not found man client side here !! ");
      setEmployee(null); // Reset employee state if not found
    }
  };

  const handleD = async (userid) => {
    console.log("Clicked !!");
    console.log("User ID to delete:", userid);
    try {
      const filteredEmployees = employees.filter((x) => x.userid !== userid);
      console.log("Filtered employees after deletion:", filteredEmployees);
      setEmployees(filteredEmployees);
      await axios.delete(`/remove/${userid}`);
      console.log("Employee deleted successfully");
      alert("Employee terminated successfully");
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Error deleting employee. Please try again.");
    }
  };

  return (
    <>
      <form className="max-w-md mx-auto mt-40" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="selectedEmployee"
            className="block text-gray-700 font-bold mb-2"
          >
            Search and Select Employee to Terminate
          </label>
          <input
            type="text"
            id="selectedEmployee"
            value={userid}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            className="lg:w-40 px-3 py-2 border  rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search by Id..."
            required
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Search employe..
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="terminationReason"
            className="block text-gray-700 font-bold mb-2"
          >
            Reason for Termination
          </label>
          <input
            type="text"
            id="terminationReason"
            value={terminationReason}
            onChange={(e) => setTerminationReason(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          onClick={() => handleD(userid)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Terminate Employee
        </button>
      </form>
      {employee && (
        <div className="mx-80 my-30 mb-20">
          <h3 className="text-black">
            Employee Details here below is gonna to be terminated from our
            Hospital
          </h3>
          <table className="table-auto border-collapse border border-gray-800 w-auto text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-800 px-4 py-2">Id</th>
                <th className="border border-gray-800 px-4 py-2"> F.Name</th>
                <th className="border border-gray-800 px-4 py-2">lastName</th>
                <th className="border border-gray-800 px-4 py-2">salary</th>
                <th className="border border-gray-800 px-4 py-2">department</th>
                <th className="border border-gray-800 px-4 py-2">email</th>
              </tr>
            </thead>
            <tbody>
              <td className="border border-gray-800 px-4 py-2">
                {employee.userid}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                {employee.firstName}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                {employee.lastName}
              </td>
              <td className="border border-gray-800 px-4 py-2">
                {employee.salary}
              </td>{" "}
              <td className="border border-gray-800 px-4 py-2">
                {employee.department}
              </td>{" "}
              <td className="border border-gray-800 px-4 py-2">
                {employee.email}
              </td>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Fire;
