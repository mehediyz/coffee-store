import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const PopularProducts = ({ data }) => {
  const [loadedData, setLoadedData] = useState(data);
  const deleteHandler = (_id) => {
    fetch(`https://coffee-store-seven.vercel.app/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const updated = loadedData.filter((item) => item._id !== _id);
          setLoadedData(updated);
        }
      });
  };
  return (
    <div>
      <div className="container mx-auto py-32">
        <div className="flex flex-col items-center gap-6 py-8">
          <span className="block text-xl text-dark text-center -mb-1">
            --- Sip & Savor ---
          </span>
          <h2 className="font-Rancho text-5xl text-primary text-center drop-shadow-md">
            Our Popular Products
          </h2>
          <Link to={"/add"}>
            <button className="bg-accent text-primary drop-shadow-md outline outline-2 outline-primary font-Rancho text-2xl px-4 py-1 block font-normal rounded-md col-span-2 hover:outline-dark hover:bg-primary hover:text-white transition duration-200 hover:ease-in-out">
              Add Coffee
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loadedData.map((item) => (
            <ProductCard
              key={item._id}
              data={item}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
