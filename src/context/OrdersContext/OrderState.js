import axios from "axios";
import { createContext } from "react";

const API_URL = "http://localhost:8080";

export const OrdersContext = createContext()
export const OrderProvider = ({ children }) => {
    const createOrder = async (order) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.post(API_URL + "/orders/create", { ProductId: order },
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