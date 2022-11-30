import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, UserAddOutlined, LogoutOutlined} from "@ant-design/icons";
import './Header.scss'
import { UserContext } from "../../context/UserContext/UserState";

const Header = () => {
    const {token, logout} = useContext(UserContext)
    const navigate = useNavigate()
    const onLogout = ()=>{
        logout()
        navigate("/")
    }
    return (
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          {token ? (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
                <Link to="/logout">Logout</Link>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="login" icon={<UserAddOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      );
    };
    
    export default Header;