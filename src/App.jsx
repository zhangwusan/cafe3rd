import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/users/AddUser";
import User from "./pages/users/User";
import axios from "axios";
import EditUser from "./pages/users/EditUser";
import Product from "./pages/products/Product";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";
import Staff from "./pages/staff/Staff";
import EditStaff from "./pages/staff/EditStaff";
import AddStaff from "./pages/staff/AddStaff";
import Admin from "./pages/Admin";
import ThisIsUs from "./pages/ThisIsUs";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";

export default function App() {
  axios.defaults.baseURL = `https://meek-tail-production.up.railway.app/`
  
  const login = window.localStorage.getItem('isLogin');
  return (
    <Router basename="cafe3rd">
      <Routes>
        <Route path="/" element={login ? <Home /> : <Login/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/this-is-us" element={<ThisIsUs />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<Register/>} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/user/add" element={<AddUser />} />
        <Route path="/admin/user/edit/:id" element={<EditUser />} />

        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/product/add" element={<AddProduct />} />
        <Route path="/admin/product/edit/:id" element={<EditProduct />} />

        <Route path="/admin/staff" element={<Staff />} />
        <Route path="/admin/staff/add" element={<AddStaff />} />
        <Route path="/admin/staff/edit/:id" element={<EditStaff />} />
      </Routes>
    </Router>
  );
}
