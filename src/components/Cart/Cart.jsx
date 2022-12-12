import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { CreditCardOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext)
  const { createOrder } = useContext(OrdersContext)
  const [selectedImage] = useState(0);
  const images = [
    "https://cdn.shopify.com/s/files/1/0574/0127/8625/products/Wildsmith_EyeSerum_HR_bae48101-5214-4b44-97aa-6b4570fc666b_1000x.png?v=1623667289",
  ];
  const cartNames = cart.map((cartItem) =>
    <p>{cartItem.name}</p>)
  const createNewOrder = () => {
    createOrder(cart)
    clearCart()
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  return (

    <div className="container-cart">
      <p>Your selected products</p>
      <Card
        title={cartNames.name}
        bordered={true}
        style={{
          width: 300,
          border: "1px solid gray",
          background: "transparent",

        }}
      >
        {cartNames}
        <div >
          <img src={images[selectedImage]} alt="" width={250}/>
          <br />
          <Button style={{
            size: "small",
            border: "1px solid gray",
            background: "transparent",
            color: "lightGray",
          }}
            onClick={clearCart}>Clear</Button>
          <Button style={{
            size: "small",
            border: "1px solid gray",
            background: "transparent",
            color: "lightGray",
          }}
            onClick={() => createNewOrder()}>Buy <CreditCardOutlined /></Button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;