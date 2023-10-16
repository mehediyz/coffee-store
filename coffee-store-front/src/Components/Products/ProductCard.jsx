import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data, deleteHandler }) => {
  const { _id, photo, name, chef, price } = data;

  // const deleteHandler = (_id) => {
  //   fetch(`http://localhost:5000/coffee/${_id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={photo} />
          <div className="flex flex-col gap-2">
            <p className="text-dark font-semibold text-xl">
              Name: <span className="text-gray-300 font-normal">{name}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Chef: <span className="text-gray-300 font-normal">{chef}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Price:{" "}
              <span className="text-gray-300 font-normal">{price} Tk</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-2 pr-4">
          <Link
            className="font-semibold bg-accent p-4 rounded-md text-center"
            to={`/view/${_id}`}
          >
            <button>View</button>
          </Link>
          <Link
            className="font-semibold bg-dark p-4 rounded-md text-white text-center"
            to={`/coffee/update/${_id}`}
          >
            <button>Edit</button>
          </Link>
          <button
            onClick={() => deleteHandler(_id)}
            className="font-semibold bg-[#EA4744] p-4 rounded-md text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
