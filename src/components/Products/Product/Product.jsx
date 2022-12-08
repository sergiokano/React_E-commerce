import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import "./Product.scss";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Product = () => {
  const { id } = useParams();
  const { product, getProduct, addCart } = useContext(ProductsContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const images = [
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/4DPSsolo_1000x.png?v=1652354694",
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/TRPSD_61cb5ab5-316c-432e-bb10-ba56cc36141e_1000x.png?v=1652362413",
  ];
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>{product.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>{product.price}</span>
        <br />
        <br />

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>

          <button className="item">
            <HeartOutlined />
          </button>
          <button className="item" onClick={() => addCart(product)}>
            <ShoppingCartOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
