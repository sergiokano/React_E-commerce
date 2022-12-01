import React, { useContext, useEffect } from "react";
import { Divider, List, Typography ,Button} from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrderState";import { ShoppingOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Cart = () =>{
const {cart, clearCart} = useContext(ProductsContext)
const {createOrder} = useContext(OrdersContext)
const cartNames = cart.map((cartItem) => cartItem.name)
const createNewOrder = ()=>{
    createOrder(cart)
    clearCart()
}
useEffect (()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
}, [cart]);

return(

 <div>
      <Divider orientation="left">Your Cart</Divider>
      <List
        header={<div>Products selected</div>}
        footer={
          <div>
            <Button onClick={clearCart}>Clear Cart</Button>
            <Button onClick={createNewOrder}>Buy <ShoppingOutlined /></Button>
          </div>
        }
        bordered
        dataSource={cartNames}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;