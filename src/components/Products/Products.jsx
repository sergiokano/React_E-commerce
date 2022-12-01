import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Button } from "antd";
// import "./Products.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container-products">
      <h1>Products</h1>
      {products?.map((product) => {
        return (
          <div key={product._id} className="site-card-border-less-wrapper">
            <Card
              title={product.name}
              bordered={true}
              style={{
                width: 300,
                border: "1px solid black",
              }}
            >
              <p>{product.price} €</p>
              <Button onClick={() => addCart(product)}>
                Add Cart <ShoppingCartOutlined />
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
