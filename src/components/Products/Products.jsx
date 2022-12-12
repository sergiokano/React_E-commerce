import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Button } from "antd";
import "./Products.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Products.scss"



const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductsContext);
  const images = [
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_EyeSerum_HR_bae48101-5214-4b44-97aa-6b4570fc666b_1000x.png?v=1623667289",
 "   https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_CopperPeptideSerum_HR_withaward_a688c81c-9e28-46d8-a494-4058fb535741_1000x.png?v=1623666511",
 "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_PlatinumBooster_HR_1000x.png?v=1623666891",
 "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/TRPSD_61cb5ab5-316c-432e-bb10-ba56cc36141e_1000x.png?v=1652362413",
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getProducts();
  }, [cart]);

  return (
    <div className="products-card">
      <p>Our latest products</p>
      <div className="container-products">
        {products?.map((product) => {
          return (
            <div >
              <div key={product.id} className="site-card-border-less-wrapper z-index">
                <br />
                <div className="card-sass">
                  <Card
                    title={product.name}
                    bordered={true}
                    style={{
                      width: 300,
                      border: "1px solid gray",
                      background: "transparent",
                      color: "#47311d",
                    }}
                  >
                    <img src={images[product.id]} alt="" width={250} />
                    <p>{product.price}</p>
                    <Button style={{
                      size: "small",
                      border: "1px solid gray",
                      background: "transparent",
                      color: "#47311d",
                    }}
                      onClick={() => addCart(product)}>
                      <ShoppingOutlined />
                    </Button>
                    <Button style={{
                      size: "small",
                      border: "1px solid gray",
                      background: "transparent",
                      color: "#47311d",
                      margin: "10px"
                    }}><Link to={'product/' + product.id}>See product</Link></Button>
                  </Card>
                </div>
              </div>
            </div>);
        })}
      </div>
    </div>
  );
};

export default Products;
