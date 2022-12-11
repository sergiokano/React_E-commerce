import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://www.freshlycosmetics.com/img/media/35/vitaminc_fondoblanco1_large_default.jpg?54b7075fcadade5dc67450826718044f",
      img2: "https://www.freshlycosmetics.com/img/media/35/vitaminc_3_large_default.jpg?4901052dc6f00c59053f2cd5d2416f38",
      title: "Vitamin C Concentrate Serum",
      oldPrice: 40,
      price: 35,
      createdAt: "2022-11-30T12:41:43.000Z",
    },
    {
      id: 2,
      img: "https://www.freshlycosmetics.com/img/media/84/blueradiance_1_large_default.jpg?e227ca6118072735d251227406969fb4",
      img2: "https://www.freshlycosmetics.com/img/media/84/BlueRadiance_2es_large_default.jpg?1de0533b5cb68113780313e4811f7784",
      title: "Blue Radiance Enzymatic Serum",
      oldPrice: 35,
      price: 35,
      createdAt: "2020-11-30T12:41:43.000Z",
    },
    {
      id: 3,
      img: "https://www.freshlycosmetics.com/img/media/365/lotusradiance_1_large_default.jpg?ed89eca96b7073d1e47f66f4a1ce8c77",
      img2: "https://www.freshlycosmetics.com/img/media/365/lotusradiance_4_large_default.jpg?a6efbd39185f3866e3fed6ea1da5ffad",
      title: "Lotus Radiance Dark Spot Treatment",
      isNew: true,
      oldPrice: 40,
      price: 35,
      createdAt: "2021-09-30T12:41:43.000Z",
    },
    {
      id: 4,
      img: "https://www.freshlycosmetics.com/img/media/34/bloomorquid_fondoblanco_1premio_large_default.jpg?a3d48688673c5ea25bf8d88ec195b4f2",
      img2: "https://www.freshlycosmetics.com/img/media/34/bloomorchid_2es_large_default.jpg?d2c6d6453680e7082f92114c046616e0",
      title: "Bloom Orchid Face Cream",
      oldPrice: 34,
      price: 29,
      createdAt: "2020-01-30T12:41:43.000Z",
    },
    {
      id: 5,
      img: "https://www.freshlycosmetics.com/img/media/142/peonylitmlesseyelash_1_large_default.jpg?cf763a70a7050f5f87ec1c4a73e6a8bc",
      img2: "https://www.freshlycosmetics.com/img/media/142/peonylitmlesseyelash_5_large_default.jpg?50ccb0428ad4f3b54ddf01bc9ab65bea",
      title: "Peony Limitless Eyelash Serum",
      isNew: true,
      oldPrice: 25,
      price: 37,
      createdAt: "2022-10-30T12:41:43.000Z",
    },
  ];

  return (
    <div className="FeaturedProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          iusto ullam nisi error similique reiciendis quia voluptatibus illum
          placeat sequi! Aut ratione magni nihil quia corporis distinctio minima
          odio ad.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
