import React from "react";
import Logo from "./svg/logo2.svg";
import Instagram from "./svg/icon-instagram.svg";
import Twitter from "./svg/icon-twitter.svg";
import Linkedin from "./svg/linkedin-brands.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div" id="contact">
        <Link to="home" smooth={true} spy={true} activeClass="active">
          <img src={Logo} alt="" className="footer-logo" />{" "}
        </Link>
        <div className="sitemap">
          <h4>
            <Link to="about" smooth={true} spy={true} activeClass="active">
              About
            </Link>
          </h4>
          <h4>
            <Link to="service" smooth={true}>
              Services
            </Link>
          </h4>
          <h4>
            <Link to="reviews" smooth={true}>
              Testimonials
            </Link>
          </h4>
        </div>
        <div className="icon-links">
          <a
            href="https://www.instagram.com/efethegenius/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.twitter.com/efethegenius/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/efe-samuel-7997a779/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={Linkedin} alt="Linkedin" className="linkedin" />
          </a>
        </div>
        <p className="creator">Designed by Efe Samuel</p>
      </div>
    </div>
  );
};
