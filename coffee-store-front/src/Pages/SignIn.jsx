import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const signinHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.supplier.value;

    const user = { email, password };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <Link to={"/"} className="font-Rancho text-3xl text-dark drop-shadow-md">
        &larr; Back to home
      </Link>
      <div className="bg-gray-200 px-10 py-12 my-8 flex flex-col gap-6 rounded max-w-md mx-auto">
        <h1 className="font-Rancho text-5xl text-dark text-center drop-shadow-md">
          Login
        </h1>
        <form onSubmit={signinHandler}>
          <div className="flex flex-col gap-4">
            <label className="font-semibold text-xl">
              Email
              <input
                className="block my-2 p-2 w-full text-base font-normal rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </label>
            <label className="font-semibold text-xl">
              Password
              <input
                className="block my-2 p-2 w-full text-base font-normal rounded-md"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>
            <button
              type="submit"
              className="bg-accent outline outline-2 outline-primary font-Rancho text-2xl py-1 block w-full font-normal rounded-md col-span-2 hover:outline-dark hover:bg-primary hover:text-white transition duration-200 hover:ease-in-out"
            >
              Login
            </button>
            <Link to={"/signup"} className="text-dark text-center text-lg">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
