import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import HomeBanner from "./HomeBanner/HomeBanner";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomeBanner />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
