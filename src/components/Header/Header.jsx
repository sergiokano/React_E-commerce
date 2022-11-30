import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <header>
            <h1>Cano'smetics</h1>
            <nav >
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">Profile</Link>

                </div>
            </nav>
        </header>
    );
};

export default Header;