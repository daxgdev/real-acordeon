import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <span className="footer__category">Company</span>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
        </div>
        <div className="footer__section">
          <span className="footer__category">Get help</span>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
        </div>
        <div className="footer__section">
          <span className="footer__category">Online Shop</span>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
          <NavLink to="/">Linkai</NavLink>
        </div>
        <div className="footer__section social-media">
          <span className="footer__category">Follow us</span>
          <div className="social-media__container">
            <NavLink to="/"><FaFacebookF size="18px" /></NavLink>
            <NavLink to="/"><FaTwitter size="18px" /></NavLink>
            <NavLink to="/"><FaYoutube size="18px" /></NavLink>
            <NavLink to="/"><FaInstagram size="18px" /></NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
