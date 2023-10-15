import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewCoffee = () => {
  const data = useLoaderData();
  const { photo, name, chef, supplier, taste, category, details } = data;
  return <div>ViewCoffee</div>;
};

export default ViewCoffee;
