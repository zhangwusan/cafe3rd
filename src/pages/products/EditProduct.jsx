import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function EditProduct() {
  const navigate = useNavigate();
  const {id} = useParams();


  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    available: false,
  });

  const { name, price, available } = product;

  if (isLoading){
    axios.get(`/api/product/${id}`).then((res) => {
      setProduct(res.data);
    });
    setIsLoading(false);
  } 


  const handleChange = (e) => {
    const {name, value, type, checked } = e.target;

    const newValue = type === 'checkbox' ? checked : value;

    setProduct({
      ...product,
      [name]: newValue,
    });
  };

  const inputs = [
    {
      id: "name",
      value: name,
      type: "text",
      placeholder: "Name",
      name: "name",
    },
    {
      id: "price",
      value: price,
      type: "number",
      placeholder: "Price",
      name: "price",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/product", product);
      console.log(response.data);
      navigate("/admin/product");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-md border px-3 py-5 border-black rounded-2xl shadow space-y-2"
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <div className="text-blue-600 text-center text-[32px]">
            EDIT PRODUCT
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2 space-x-2 mt-2"
            htmlFor="available"
          >
            Available
            <input
              id="available"
              type="checkbox"
              name="available"
              value={available}
              onChange={handleChange}
              className="ml-2"
            />
          </label>
        </div>
        <ButtonSubmit className="flex justify-center">Submit</ButtonSubmit>
      </form>
    </div>
  );
}
