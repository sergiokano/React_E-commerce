import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Button } from "antd";
import "./Products.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Products.scss"



const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductsContext);
  const [selectedImage] = useState(0);
  const images = [
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_EyeSerum_HR_bae48101-5214-4b44-97aa-6b4570fc666b_1000x.png?v=1623667289",
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getProducts();
  }, [cart]);

  return (
    <div className="container-products">
      <p>Our latest products</p>
      {products?.map((product) => {
        return (
          <>
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
                    color: "lightGray",
                  }}
                >
                  <img src={images[selectedImage]} alt="" width={250}/>
                  <p>{product.price}</p>
                  <Button style={{
                    size: "small",
                    border: "1px solid gray",
                    background: "transparent",
                    color: "lightGray",
                  }}
                    onClick={() => addCart(product)}>
                    <ShoppingOutlined />
                  </Button>
                  <Button style={{
                    size: "small",
                    border: "1px solid gray",
                    background: "transparent",
                    color: "lightGray",
                    margin: "10px"
                  }}><Link to={'product/' + product.id}>See product</Link></Button>
                </Card>
              </div>
            </div>
          </>);
      })}
    </div>
  );
};

export default Products;
