import axios from "axios";
import { createContext } from "react";


export const OrdersContext = createContext()
export const OrderProvider = ({ children }) => {
    const API_URL = "http://localhost:8080";
    const createOrder = async (cart) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const products = cart.map((product) =>{
            return product.id
        }) 
        console.log(products)
        const res = await axios.post(API_URL + "/orders/create", { paymentMethod: "Paypal", products: products},
            {
                headers: {
                    authorization: token,
                },
            }
        );
        return res;
    };
    return (
        <OrdersContext.Provider
            value={{ createOrder }}>
            {children}

        </OrdersContext.Provider>
    )
}