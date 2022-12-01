import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { UserProvider } from './context/UserContext/UserState';
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrderProvider } from './context/OrdersContext/OrderState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ProductsProvider>
        <UserProvider>
        <OrderProvider>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path="/products" element={<Products />} />
          <Route path='/profile' element={<Profile />}/>
      </Routes>
      </OrderProvider>
      </UserProvider>
      </ProductsProvider>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
