import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const data = useLoaderData();
  const { photo, name, chef, supplier, taste, category, details } = data;
  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <Link to={"/"} className="font-Rancho text-3xl text-dark drop-shadow-md">
        &larr; Back to home
      </Link>
      <div className="bg-gray-200 px-10 py-12 my-8 rounded">
        <div className="flex items-center justify-center gap-8">
          <img src={photo} />
          <div className="flex flex-col gap-2">
            <p className="text-dark font-semibold text-xl">
              Name: <span className="text-gray-300 font-normal">{name}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Supplier:{" "}
              <span className="text-gray-300 font-normal">{supplier}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Taste: <span className="text-gray-300 font-normal">{taste}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Chef: <span className="text-gray-300 font-normal">{chef}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Category:{" "}
              <span className="text-gray-300 font-normal">{category}</span>
            </p>
            <p className="text-dark font-semibold text-xl">
              Details:{" "}
              <span className="text-gray-300 font-normal">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
