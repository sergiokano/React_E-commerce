import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  const isDiscounted =
    item.price < item.oldPrice ? (
      <span>Discounted</span>
    ) : (
      <span></span>
    );
    const createdAtFormat = 
    item.createdAt.slice(0,7).replace('-', '');

    const newSeason =
    createdAtFormat > 202202 ? (
      <span>newSeasonnn</span>
    ) : (
      <span></span>
    );

  return (
    <Link to={`/product/${item.id}`}>
      {console.log(createdAtFormat)};
      <div className="card">
        <div className="image">
          {isDiscounted}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        {newSeason}
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
