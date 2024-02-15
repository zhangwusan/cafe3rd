import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="flex flex-col bg-white w-[200px] h-[300px] rounded-lg text-white py-5 px-6 space-y-2 text-center">
          <Link to={"/admin/user"} className="border border-black bg-blue-600 rounded-2xl">User</Link>
          <Link to={"/admin/product"} className="border border-black bg-blue-600 rounded-2xl">Product</Link>
          <Link to={"/admin/staff"} className="border border-black bg-blue-600 rounded-2xl">Staff</Link>
        </div>
      </div>
    </>
  );
}
