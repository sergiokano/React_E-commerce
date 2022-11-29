import React from "react";
import { Link } from "react-router-dom";
// import './Header.scss'

const Header = () => {
    return (
        <header>
            <h1>Canos'metics</h1>
            <nav >
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">Profile</Link>

                </div>
            </nav>
        </header>
    );
};

export default Header;