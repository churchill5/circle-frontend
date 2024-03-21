import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <p>website by</p>
        <a
          target="blank"
          className="footer_link"
          href="https://vermillion-gnome-5bee9b.netlify.app"
        >
          Churchil
        </a>
      </div>
      <p> © 2024 | Circle-calculations | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
