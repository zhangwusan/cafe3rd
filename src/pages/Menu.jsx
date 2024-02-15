import CoffeeRender from "../components/CoffeeRender";
import ImageCoffee from "../assets/coffee1.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "../components/UserContext";

export default function Menu() {
  const [products, setProducts] = useState([]);
  const {user} = useUserContext();
  useEffect(() => {
    Loading();
  }, []);
  const Loading = async () => {
    // loading data product from data base
    const response = await axios.get("/api/product");
    setProducts(response.data);
  };
  const handleIncrease = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const handleDecrease = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const renderCoffeeItem = (coffee) => (
    <div className="flex justify-between border-b border-black py-3">
      <div className="text-center">
        <strong>{coffee.name}</strong>
        <div>Available: {coffee.available ? "TRUE" : "FALSE"}</div>
      </div>
      <div className="flex">
        <div className="flex-col">
          <p>Price: {coffee.price}</p>
          <h2>Product List</h2>
          <button
            onClick={() => handleDecrease(coffee.id)}
            className="w-6 h-6 bg-blue-300 px-1 border border-black"
          >
            -
          </button>
          <span className="w-6 h-6 px-1 border border-black rounded-sm">
            {coffee.quantity === null ? 0 : coffee.quantity}
          </span>
          <button
            onClick={() => handleIncrease(coffee.id)}
            className="bg-blue-300 w-6 h-6 px-1 border border-black"
          >
            +
          </button>
        </div>
        <img className="w-20 h-20 m-1" src={ImageCoffee} alt="coffee" />
      </div>
    </div>
  );
  const handleOrder = async () => {
    try {
      const promises = products.map(async (product) => {
        if (product.quantity !== null) {
          console.log(product.quantity);
          const response = await axios.post(`/api/user/${user.id}/product`, product);
          console.log(response.data);
        }
      });
  
      await Promise.all(promises);
  
      // All requests have completed successfully
      console.log("All orders placed successfully");
    } catch (error) {
      // Handle errors
      console.error("Error placing orders:", error);
    }
  };
  

  return (
    <>
      <NavBar />
      <div className="bg-orange-100 text-center py-10 px-20 lg:py-24 lg:px-32">
        <div className="font-bold text-[60px]">Our Cafe{`'`}s Menu</div>
        <div>So many kind of Cafe here! Select one which you want</div>
      </div>

      <div className="my-10">
        <div className="text-center my-16 font-bold text-[32px]">
          All Day Every Day
        </div>

        <div className="mx-20 py-5 my-2">
          <div className="text-center border-t border-b border-black py-5">
            Hot Day
          </div>
          <CoffeeRender items={products} renderItem={renderCoffeeItem} />
          <button onClick={handleOrder} className="px-3 py-2 border border-black rounded-lg mt-2 text-white bg-blue-600 hover:bg-blue-500">
            Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
