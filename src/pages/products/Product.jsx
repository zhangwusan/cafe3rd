import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const headerProduct = ["ID", "Name", "Price", "Availability", "Action"];

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    LoadProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LoadProductData = () => {
    axios
      .get("/api/product")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteProduct = async (id) => {
    await axios.delete(`/api/product/${id}`);
    LoadProductData();
  };

  return (
    <div className="m-4">
      <div className="flex justify-between my-2 text-center">
        <Link to={"/admin"}>Back</Link>
        <Link to={"/admin/product/add"} className="px-3 py-2 bg-blue-600 rounded-2xl">
          Add
        </Link>
      </div>

      <table className="w-full text-center">
        <thead className="border-t border-b border-black">
          <tr>
            {headerProduct.map((product, key) => {
              return <th key={key}>{product}</th>;
            })}
          </tr>
        </thead>
        <tbody className="border-b border-black">
          {productData.map((product, key) => {
            return (
              <tr key={key}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{`${product.available}`}</td>
                <td className="py-3">
                  <Link
                    to={"/admin/product/edit/" + product.id}
                    className="m-1 px-3 py-2 w-10 max-w-20 bg-blue-600 rounded-2xl"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
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
