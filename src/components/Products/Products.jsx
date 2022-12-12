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
 "   https://www.biotherm.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-bio-master-catalog/es_ES/dw2920c21f/BIOTHERM/BIO117058-1/3614272895645.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=85",
 "https://www.biotherm.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-bio-master-catalog/default/dw0b58fe0e/BIOTHERM/BIO117058/3614272895645_autre2.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=85",
 "https://www.biotherm.es/dw/image/v2/AAQP_PRD/on/demandware.static/-/Sites-bio-master-catalog/default/dw87c1d25f/BIOTHERM/BIO117058/3614272895645_autre5.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=85"
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
                    color: "lightGray",
                  }}
                >
                  <img src={images[product.id]} alt="" width={250}/>
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
          </div>);
      })}
    </div>
    </div>
  );
};

export default Products;
