import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { UserProvider } from "./context/UserContext/UserState";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrderProvider } from "./context/OrdersContext/OrderState";
import Cart from "./components/Cart/Cart";
import Product from "./components/Products/Product/Product";
import NoMatch from "./components/NoMatch/NoMatch";
import About from "./components/About/About";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrderProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/product/:id" element={<Product />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
              <Footer />
            </OrderProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
