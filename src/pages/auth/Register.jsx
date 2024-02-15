import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import ButtonSubmit from "../../components/ButtonSubmit";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    ConformPassword: "",
    role: "USER",
  });

  const { firstName, lastName, email, password, ConformPassword } = user;
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const inputs = [
    {
      id: "firstName",
      value: firstName,
      type: "text",
      placeholder: "First Name",
      name: "firstName",
      onChange: handleChange,
    },
    {
      id: "lastName",
      value: lastName,
      type: "text",
      placeholder: "Last Name",
      name: "lastName",
      onChange: handleChange,
    },
    {
      id: "email",
      value: email,
      type: "email",
      placeholder: "Email",
      name: "email",
      onChange: handleChange,
    },
    {
      id: "password",
      value: password,
      type: "password",
      placeholder: "Password",
      name: "password",
      onChange: handleChange,
    },
    {
      id: "ConformPassword",
      value: ConformPassword,
      type: "password",
      placeholder: "Conform Password",
      name: "ConformPassword",
      onChange: handleChange,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user", user);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-full max-w-md border px-3 py-5 border-black rounded-2xl shadow"
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <div className="text-blue-600 text-center text-[32px]">
              Register
            </div>

            {inputs.map((input, key) => {
              return (
                <CustomInput
                  key={key}
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                />
              );
            })}
          </div>
          <ButtonSubmit className="flex justify-center">Sign Up</ButtonSubmit>
          <div className="flex flex-col text-center">
            <Link to={"/login"}>Already have a account</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
