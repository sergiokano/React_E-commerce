import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <p className="col-sm">
          &copy;{new Date().getFullYear()}
          <a href="http://www.linkedin.com/in/sergiocano-dev">
            <span> designed by theKano-dev_xXX44Xx && </span>
          </a>
          <a href="https://www.linkedin.com/in/mherrevi/">
            <span> Miguel Herrera </span>
          </a>
          <Link to="/"> Home </Link> | <Link to="/news"> News </Link> |{" "}
          <Link to="/create"> Post an Article </Link> | All rights reserved |
          Terms Of Service | Privacy |
        </p>
      </div>
    </div>
  );
}

export default Footer;