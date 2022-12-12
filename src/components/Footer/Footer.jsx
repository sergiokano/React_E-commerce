import React from "react";
import "./Footer.scss";
import paymentImg from "../../img/payment.png";
import logo from "../../img/logo_freshly.png"


function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Únete a Freshly</h1>
          <span>
            Opiniones
          </span>
          <span>
            Blog
          </span>
          <span>
            ¡Únete al Freshly Club!
          </span>
          <span>
            Black Friday
          </span>
          <span>
            Freshly Days
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lunes - Viernes
          </span>
          <span>
            9:00h -13h | 15:00h - 17:00h
          </span>
          <span>
            676 932 595
          </span>
          <span>
            mailhello@freshlycosmetics.com
          </span>


        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img className="logo" src={logo} alt="" />
          <span className="copyright">
            <span>© Copyright {new Date().getFullYear()}</span>
            <span> designed by </span>
            <a href="http://www.linkedin.com/in/sergiocano-dev">
              <span>theKano-dev_xXX44Xx</span>
            </a>
            <span> && </span>
            <a href="https://www.linkedin.com/in/mherrevi/">
              <span> Miguel Herrera </span>
            </a>
            <span> All Rights Reserved</span>
          </span>
        </div>
        <div className="right">
          <img src={paymentImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
