import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, UserAddOutlined, LogoutOutlined, LoginOutlined, ShopOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext/UserState";
import { Badge } from "antd";
import "./Header.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";


const Header = () => {
    const {token, logout} = useContext(UserContext)
    const { cart } = useContext(ProductsContext)
    const navigate = useNavigate()
    const onLogout = ()=>{
        logout()
        navigate("/")
    }
    return (
        <div className="container-header">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/register">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <div className="container-header_right">

            </div>
          </nav>


        {/* <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<ShopOutlined />}>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          {" "}
          <Badge count={cart.length} size="small">
            Cart
          </Badge>
        </Link>
      </Menu.Item>
          <Menu.Item key="register" icon={<UserAddOutlined />}>
              <Link to="/register">Register</Link>
            </Menu.Item>
          {token ? (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}> 
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
                <Link to="/">Logout</Link>
              </Menu.Item>
            </>
          )  : (
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
            
          )}
        </Menu> */}
        </div>
      );
    };
    
    export default Header;


    
    
