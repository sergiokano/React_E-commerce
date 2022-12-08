import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Slider/Slider";
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <br />
      <p>
        Welcome to <strong>Cano'smetics</strong>, where you will find the latest
        cruelty free cosmetics on demand.
        <br />
        <br />
        ~ Facial cream
        <br />
        ~ Eye care
        <br />
        ~ Cleaning
        <br />
        ~ Oily skin
        <br />
        ~ Mature skin
        <br />
        ~ Dry Skin
        <br />
        ~ Sensitive skin
        <br />
        ~ Serums
        <br />
        ~ Well aging
        <br />
        ~ and more...
        <br />
        <br />
        <br />
        Go to <i>Login</i> to make your new order.
        <br />
        <br />
        <br />
        {/* <img src={logo} width="150" height="80" alt="img" /> */}
      </p>
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />

    </div>
  );
};

export default Home;
