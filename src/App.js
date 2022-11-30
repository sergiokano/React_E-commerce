import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Products />
        <Footer />
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
