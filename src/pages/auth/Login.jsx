import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import ButtonSubmit from "../../components/ButtonSubmit";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { useUserContext } from "../../components/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const [incorrect, setIncorrect] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {login} = useUserContext();
  const { email, password } = user;
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const inputs = [
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
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/user");
      response.data.map((data) => {
        if (data.email === email && data.password === password) {
          login(data);
          navigate("/");
        }else{
            setIncorrect(true)
        }
      })
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
            <div className="text-blue-600 text-center text-[32px]">Login</div>

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
          {incorrect && <div  className="text-red-600">Incorrect email or password</div>}
          <ButtonSubmit className="flex justify-center">Login</ButtonSubmit>
          <div className="flex flex-col text-center">
            <Link to={"/create-user"}>Create new account</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
