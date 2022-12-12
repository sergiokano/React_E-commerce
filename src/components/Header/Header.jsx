import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from 'antd';
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext/UserState";
import { Badge } from "antd";
import "./Header.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import logo from "../../img/logo_freshly_brown.png";
import Products from "../Products/Products";
import { useState } from "react";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="container-header">
      <img className="logo" src={logo} alt="logo freshly cosmetics" />

      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="products">
         
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/cart">
            <span class="material-icons">shopping_bag</span>
          </Link>

          <Badge
            count={cart.length}
            size="small"
            offset={[1, -10]}
            color="none"
          ></Badge>
        </li>
        <li>
          <Link to="/wishlist">
            <span class="material-icons"><HeartOutlined /></span>
          </Link>{" "}
        </li>

        {token ? (
          <>
            <li>
              <Link to="/profile">
                <span class="material-icons">person</span>
              </Link>{" "}
            </li>
            <li>
              <Link to="/logout">
                <span class="material-icons">logout</span>
              </Link>{" "}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>{" "}
            </li>

            <li className="signUp">
              <Link to="/register">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
