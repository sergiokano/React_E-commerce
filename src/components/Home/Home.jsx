import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Lore from "../Lore/Lore";
import Slider from "../Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Lore />
      <Slider />
      <br />
      <div className="container-home">
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
      </p>
        <div className="img-fruit">

        <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b26ad227425697.56364eb01637e.jpg"} alt="img" />
        </div>
        </div>
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
