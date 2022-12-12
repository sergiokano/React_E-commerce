import React from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Lore from "../Lore/Lore";
import RRSS from "../RRSS/RRSS";
import Slider from "../Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Lore />
      <Slider  />
      <br />
      <div className="container-home">
      <p>
        OUR HOME AT HECKFIELD PLACE
        <br />
        <br />
        Heckfield Place is both tamed and gently wild, sculpted over centuries by ancient heather, woodland, gardens, lakes and meadows. This idyllic Georgian estate has been lovingly restored from its classical origins. The house has been rewoven into a luxury hotel and the dramatic parkland into a biodynamic farm and beautiful formal gardens. This secluded Hampshire haven is home to Wildsmith Skin.
        <br />
        <br />
        OUR SUSTAINABILITY COMMITMENT
        <br />
        <br />
        We are the first luxury beauty brand to use compostable packaging made from mycelium - a farm-grown material using the roots of a mushroom that composts fully in around 90 days.

        We predominantly use glass and aluminium for our packaging, both of which can be endlessly recycled without losing their quality.

        We facilitate a complimentary Return and Recycle programme so you can return your empty Wildsmith products to us for responsible recycling.

        We are growing Calendula and Chamomile via biodynamic farming principles at the Heckfield Estate market garden in Hampshire.
        We work with independent suppliers who are happy to work with us on a tailor-made basis for packaging and products. No excess, no wastage.
        <br />
        <br />
      </p>
        <div className="img-fruit">

        <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b26ad227425697.56364eb01637e.jpg"} alt="img" />
        </div>
        </div>
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
      <RRSS/>
    </div>
  );
};

export default Home;
