import React from "react";
import Header from "../Components/Header";
import PopularProducts from "../Components/Products/PopularProducts";
import Instagram from "../Components/Instagram/Instagram";

const Home = () => {
  // const data = useLoaderData();
  return (
    <>
      <Header />
      <PopularProducts />
      <Instagram />
    </>
  );
};

export default Home;
