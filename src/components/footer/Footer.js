import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="item">
          <a href="/News">News</a>
        </div>
        <div className="item">
          <a href="/FAQ">FAQ</a>
        </div>
        <div className="item">
          <a href="/Reddit">Reddit</a>
        </div>
        <div className="item">
          <a href="/Hall">Hall of Fame</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="item">
          <a href="Donate">Donate</a>
        </div>
        <div className="item">
          <a href="Privacy">Privacy</a>
        </div>
        <div className="item">
          <a href="/Password">Password</a>
        </div>
        <div className="item">
          <a href="/Simply">Simply</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
