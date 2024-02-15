import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../../components/ButtonSubmit";
import CustomInput from "../../components/CustomInput";

export default function AddStaff() {
  const navigate = useNavigate();
  const [staff, setStaff] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    role: "CASHIER",
    timeWork: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    dateOfBirth,
    gender,
    role,
    timeWork,
  } = staff;

  const handleChange = (e) => {
    setStaff({
      ...staff,
      [e.target.name]: e.target.value,
    });
  };

  const inputs = [
    {
      id: "firstName",
      value: firstName,
      type: "text",
      placeholder: "First name",
      name: "firstName",
    },
    {
      id: "lastName",
      value: lastName,
      type: "text",
      placeholder: "Last name",
      name: "lastName",
    },
    {
      id: "email",
      value: email,
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      id: "password",
      value: password,
      type: "password",
      placeholder: "Password",
      name: "password",
    },
    {
      id: "phone",
      value: phone,
      type: "text",
      placeholder: "Phone",
      name: "phone",
    },
    {
      id: "address",
      value: address,
      type: "text",
      placeholder: "Address",
      name: "address",
    },
    {
      id: "dateOfBirth",
      value: dateOfBirth,
      type: "date",
      placeholder: "Date of Birth",
      name: "dateOfBirth",
    },
    {
      id: "gender",
      value: gender,
      type: "text",
      placeholder: "Gender",
      name: "gender",
    },
    {
      id: "role",
      value: role,
      type: "text",
      placeholder: "Role",
      name: "role",
    },
    {
      id: "timeWork",
      value: timeWork,
      type: "text",
      placeholder: "Time Work",
      name: "timeWork",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(staff);
      const response = await axios.post("/api/staff", staff);

      console.log(response.data);
      navigate("/admin/staff");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form
        className="w-full max-w-md border px-3 py-5 border-black rounded-2xl shadow space-y-2"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div className="text-blue-600 text-center text-[32px]">ADD STAFF</div>

        {inputs.map((input, key) => {
          return input.id !== "role" ? (
            <CustomInput
              key={key}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={input.value}
              onChange={handleChange}
            />
          ) : (
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

        <ButtonSubmit className="flex justify-center">Submit</ButtonSubmit>
      </form>
    </div>
  );
}
