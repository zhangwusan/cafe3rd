import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Staff() {

  const headerStaff = [
    "ID", 
    "First Name", 
    "Last Name",
    "Email", 
    "Password",
    "Phone",
    "Address",
    "Date Of Birth",
    "Gender",
    "Role",
    "Time Work",
    "Action"
];

  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    LoadStaffData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LoadStaffData = () => {
    axios
      .get("/api/staff")
      .then((response) => {
        setStaffData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteStaff = async (id) => {
    await axios.delete(`/api/staff/${id}`);
    LoadStaffData();
  };

  return (
    <div className="m-4">
      <div className="flex justify-between my-2 text-center">
        <Link to={"/admin"}>Back</Link>
        <Link to={"/admin/staff/add"} className="px-3 py-2 bg-blue-600 rounded-2xl">
          Add
        </Link>
      </div>

      <table className="w-full text-center">
        <thead className="border-t border-b border-black">
          <tr>
            {headerStaff.map((staff, key) => {
              return <th key={key}>{staff}</th>;
            })}
          </tr>
        </thead>
        <tbody className="border-b border-black">
          {staffData.map((staff, key) => {
            return (
              <tr key={key}>
                <td>{staff.id}</td>
                <td>{staff.firstName}</td>
                <td>{staff.lastName}</td>
                <td>{staff.email}</td>
                <td>{staff.password}</td>
                <td>{staff.phone}</td>
                <td>{staff.address}</td>
                <td>{staff.dateOfBirth}</td>
                <td>{staff.gender}</td>
                <td>{staff.role}</td>
                <td>{staff.timeWork}</td>

                <td className="py-3">
                  <Link
                    to={"/admin/staff/edit/" + staff.id}
                    className="m-1 px-3 py-2 w-10 max-w-20 bg-blue-600 rounded-2xl"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteStaff(staff.id)}
                    className="m-1 px-3 py-2 bg-red-600 rounded-2xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
