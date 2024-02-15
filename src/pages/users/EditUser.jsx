import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomInput from "../../components/CustomInput";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function EditUser() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const {id} = useParams();
  const { firstName, lastName, email, password } = user;
  // get data first 
  if (isLoading){
    axios.get(`/api/user/${id}`).then((res) => {
      setUser(res.data);
    });
    setIsLoading(false);
  } 
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
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/user/${id}`, user);
      console.log(response.data);
      navigate("/admin/user");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
    return (
        <div className="flex justify-center items-center h-screen">
          <form
            className="w-full max-w-md border px-3 py-5 border-black rounded-2xl shadow"
            autoComplete="on"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
                <div className="text-blue-600 text-center text-[32px]">EDIT USER</div>
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
            <ButtonSubmit className="flex justify-center">Submit</ButtonSubmit>
          </form>
        </div>
      );
}
