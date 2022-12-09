import { Card } from 'antd';
import React, { useContext, useEffect } from 'react'
import { OrdersContext } from '../../context/OrdersContext/OrderState'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Wishlist = () => {
    const { cart, clearCart, product } = useContext(ProductsContext)
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
            <p>Your loved products</p>
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
                color: "lightGray",
              }}
               onClick={clearCart}>Clear</Button>
                    <Button style={{
                size: "small",
                border: "1px solid lightGray",
                background: "transparent",
                color: "lightGray",
              }}
               className="item" onClick={() => createNewOrder(product)}>
                        <ShoppingOutlined />
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Wishlist