import React from "react";
import Header from "../Components/Header";
import PopularProducts from "../Components/Products/PopularProducts";
import Instagram from "../Components/Instagram/Instagram";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Header />
      <PopularProducts data={data} />
      <Instagram />
    </>
  );
};

export default Home;
