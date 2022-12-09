import React, { useContext, useEffect } from "react";
import { Button, Card } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrderState";
import { ShoppingOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext)
  const { createOrder } = useContext(OrdersContext)
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
          border: "1px solid lightGray",
          background: "transparent",
        }}
      >
        {cartNames}
        <div >
          <br />
          <Button style={{
                size: "small",
                border: "1px solid lightGray",
                background: "transparent",
              }}
               onClick={clearCart}>Clear</Button>
          <Button style={{
                size: "small",
                border: "1px solid lightGray",
                background: "transparent",
              }}
               onClick={() => createNewOrder()}>Buy <ShoppingOutlined /></Button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;