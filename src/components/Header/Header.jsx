import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Menu } from "antd";
// import {
//   HomeOutlined,
//   UserOutlined,
//   UserAddOutlined,
//   LogoutOutlined,
//   LoginOutlined,
//   ShopOutlined,
//   ShoppingCartOutlined,
// } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext/UserState";
import { Badge } from "antd";
import "./Header.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import logo from "../../img/logo_freshly.png";

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

        <li className="menu-vertical">
          <Link to="/products">Products</Link>
          <ul className="menu-vertical-container">
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </li>
        <li>
          <Link to="/cart">Cart</Link>

          <Badge
            count={cart.length}
            size="small"
            offset={[1, -10]}
            color="none"
          ></Badge>
        </li>

        {token ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>{" "}
            </li>
            <li>
              <Link to="/logout">Logout</Link>{" "}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>{" "}
            </li>

            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
