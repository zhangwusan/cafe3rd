import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
  const headerUserData = [
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Password",
    "Role",
    "Action"
  ];

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    LoadUserData();
  }, []);

  const LoadUserData = (() => {
    axios
   .get("/api/user")
   .then((res) => {
        setUserData(res.data);
      })
   .catch((err) => {
        console.log(err);
      });
  }) 

  const deleteUser = async (id) => {
    await axios.delete(`/api/user/${id}`)
    LoadUserData();
  }

  return (
    <div className="m-4">
      <div className="flex justify-between my-2 text-center">
        <Link to={"/admin"} >Back</Link>
        <Link to={"/admin/user/add"} className="px-3 py-2 bg-blue-600 rounded-2xl">
          Add
        </Link>
      </div>

      <table className="w-full text-center">
        <thead className="border-t border-b border-black">
          <tr>
            {headerUserData.map((user, key) => {
              return <th key={key}>{user}</th>;
            })}
          </tr>
        </thead>
        <tbody className="border-b border-black">
            {userData.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <td className="py-3">
                    <Link to={"/admin/user/edit/" + user.id} className="m-1 px-3 py-2 w-10 max-w-20 bg-blue-600 rounded-2xl">Edit</Link>
                    <button onClick={() => deleteUser(user.id)} className="m-1 px-3 py-2 bg-red-600 rounded-2xl">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
