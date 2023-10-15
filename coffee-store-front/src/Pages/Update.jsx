import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();

  const updateCoffeeHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/update/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <Link to={"/"} className="font-Rancho text-3xl text-dark drop-shadow-md">
        &larr; Back to home
      </Link>
      <div className="bg-gray-200 px-10 py-12 my-8 flex flex-col gap-6 rounded">
        <h1 className="font-Rancho text-5xl text-dark text-center drop-shadow-md">
          Update Existing Coffee Details
        </h1>
        <p className="text-dark text-center text-lg">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={updateCoffeeHandler}>
          <div className="flex gap-4">
            <div className="grid grid-cols-2 gap-4 w-full">
              <label className="font-semibold text-xl">
                Name
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="name"
                  defaultValue={data.name}
                  placeholder="Enter coffee name"
                />
              </label>
              <label className="font-semibold text-xl">
                Supplier
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="supplier"
                  defaultValue={data.supplier}
                  placeholder="Enter coffee supplier"
                />
              </label>
              <label className="font-semibold text-xl">
                Category
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="category"
                  defaultValue={data.category}
                  placeholder="Enter coffee category"
                />
              </label>
              <label className="font-semibold text-xl">
                Chef
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="chef"
                  defaultValue={data.chef}
                  placeholder="Enter coffee chef"
                />
              </label>
              <label className="font-semibold text-xl">
                Taste
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="taste"
                  defaultValue={data.taste}
                  placeholder="Enter coffee taste"
                />
              </label>
              <label className="font-semibold text-xl">
                Details
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="details"
                  defaultValue={data.details}
                  placeholder="Enter coffee details"
                />
              </label>
              <label className="font-semibold text-xl col-span-2">
                Photo
                <input
                  className="block my-2 p-2 w-full text-base font-normal rounded-md"
                  type="text"
                  name="photo"
                  defaultValue={data.photo}
                  placeholder="Enter photo URL"
                />
              </label>
              <button
                type="submit"
                className="bg-accent outline outline-2 outline-primary font-Rancho text-2xl py-1 block w-full font-normal rounded-md col-span-2 hover:outline-dark hover:bg-primary hover:text-white transition duration-200 hover:ease-in-out"
              >
                Update Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
