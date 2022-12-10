import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import "./Product.scss";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Product = () => {
  const { id } = useParams();
  const { product, getProduct, addCart, addWishlist } = useContext(ProductsContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const images = [
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_EyeSerum_HR_bae48101-5214-4b44-97aa-6b4570fc666b_1000x.png?v=1623667289",
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_EyeSerum_Outer_HR_1000x.png?v=1623667289",
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
        <p>{product.description}</p>
        <span>{product.price}</span>
        <br />
        <br />

        <div className="quantity">
          <Button style={{
            size: "small",
            border: "1px solid gray",
            background: "transparent",
            color: "lightGray",
          }}
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </Button>
          {quantity}
          <Button style={{
            size: "small",
            border: "1px solid gray",
            background: "transparent",
            color: "lightGray",
          }}
            onClick={() => setQuantity((prev) => prev + 1)}>+</Button>

          <Button style={{
            size: "small",
            border: "1px solid gray",
            background: "transparent",
            color: "lightGray",
          }}
            className="item" onClick={() => addWishlist(product)}>
            <HeartOutlined />
          </Button>
          <Button style={{
            size: "small",
            border: "1px solid gray",
            background: "transparent",
            color: "lightGray",
          }}
            className="item" onClick={() => addCart(product)}>
            <ShoppingOutlined />
          </Button>
        </div>
        <br />
        <br />
        <div className="info">
          <p>Facial product</p>
          <p>#cosmetic #men #women #facialcosmetic</p>
          <br />
          <p>Freshly Cosmetics®</p>
        </div>
        <hr />
        <div className="details">
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
