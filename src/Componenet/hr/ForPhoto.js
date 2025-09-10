import React, { useEffect, useState } from "react";
import axios from "axios";
const ForPhoto = () => {
  const [employees, setEmploye] = useState([]);
  const [bonus, setBonus] = useState("");
  const [punishment, SetPunishment] = useState("");
  // first  of all we should have 2 use a useeffect to get data from  databse and we use a state inorder to stores a fetche data ok man of God that is possible !
  useEffect(() => {
    const fetchEmployees = async (req, resp) => {
      try {
        const response = await axios.get("/employee"); // this is a http request to be sent via a axios to a server ok man of God i mean that is a Api
        setEmploye(response.data); // this is a Json obect ok man then converted to array in front end because we have initialazed it with a array ::
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  });
  const handleDelete = async (userid) => {
    console.log("Clicked !!");
    // alert("Are u sure to delete this guys ??");
    try {
      setEmploye(employees.filter((x) => x.userid !== userid)); // removes all items that is not equalt to a userid
      await axios.delete(`/remove/${userid}`);
      alert("submited Succesfully !");
    } catch (error) {
      console.log(" not deleted properly guys !!");
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 py-2">
        <h1>this below is a fetched employe listed from a database </h1>
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-800 w-auto mx-10">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 mx-40 ">
                  First Name
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Last Name
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  User ID
                </th>

                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Role
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Salary
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Emergency Contact
                </th>
                {/* <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Email
                </th> */}
                {/* <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Address
                </th> */}
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  punishment
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  bonus
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  Terminate
                </th>
                <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  edit
                </th>
                {/* <th className="border border-gray-800 px-4 py-2 sm:w-1/6 ">
                  edit
                </th> */}
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.userid} className="bg-gray-100">
                  <td className="border border-gray-800 px-4 py-2">
                    {employee.firstName}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {employee.lastName}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {employee.userid}
                  </td>
                  {/* <td className="border border-gray-800 px-4 py-2">
                    {employee.birthday}
                  </td> */}
                  <td className="border border-gray-800 px-4 py-2">
                    {employee.role}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {employee.salary} birr
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {employee.emergencyContact}
                  </td>
                  {/* <td className="border border-gray-800 px-4 py-2">
                    {employee.email}
                  </td> */}
                  {/* <td className="border border-gray-800 px-4 py-2">
                    {employee.address}
                  </td> */}
                  <td className="border border-gray-800 px-4 py-2">0</td>
                  <td className="border border-gray-800 px-4 py-2">0</td>
                  <td className="border border-gray-800 px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(employee.userid)}
                    >
                      Terminate
                    </button>
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    <button className="bg-black hover:bg-red-700 text-white font-bold py-1 px-2 mt-2 rounded mb-3 flex mx-4">
                      Edit
                    </button>
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
// export { handleDelete };
export default ForPhoto;
