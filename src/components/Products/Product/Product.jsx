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
 "   https://www.biotherm.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-bio-master-catalog/es_ES/dw2920c21f/BIOTHERM/BIO117058-1/3614272895645.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=85",
 "https://www.biotherm.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-bio-master-catalog/default/dw0b58fe0e/BIOTHERM/BIO117058/3614272895645_autre2.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=85",
 "https://www.biotherm.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-bio-master-catalog/default/dw87c1d25f/BIOTHERM/BIO117058/3614272895645_autre5.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=85",
  ];
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
          <img src={images[2]} alt="" onClick={(e) => setSelectedImage(2)} />
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
