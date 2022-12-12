import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  const isDiscounted =
    item.price < item.oldPrice ? (
      <span>Discounted</span>
    ) : (
      <noscript></noscript>
    );

  const createdAtFormat = item.createdAt.slice(0, 7).replace("-", "");

  const newSeason =
    createdAtFormat > 202202 ? <span>newSeasonnn</span> : <noscript></noscript>;

  return (
    <Link to={`/product/${item.id}`}>
      {console.log(createdAtFormat)}
      <div className="card">
        <div className="image">
          <div className="discount">{isDiscounted}</div>
          <div className="newSeason">{newSeason}</div>
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <div className="content-info">
          <h2>{item.title}</h2>
          <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
