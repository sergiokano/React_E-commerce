import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Button } from "antd";
// import "./Products.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container-products">
      <p>Our latest products</p>
      {products?.map((product) => {
        return (
          <div key={product.id} className="site-card-border-less-wrapper z-index">
            <Card
              title={product.name}
              bordered={true}
              style={{
                width: 300,
                border: "1px solid lightGray",
              }}
            >
              <p>{product.price} €</p>
              <Button onClick={() => addCart(product)}>
                Add to Cart <ShoppingCartOutlined />
              </Button>
              <Button><Link to={'product/'+product.id}>Ver producto</Link></Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
