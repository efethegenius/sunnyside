import React, { useState } from "react";
import Hamburger from "./svg/icon-hamburger.svg";
import Logo from "./svg/logo.svg";
import Arrow from "./svg/icon-arrow-down.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";

export const Header = () => {
  const [showlink, setShowLink] = useState(false);
  const handleClick = () => {
    setShowLink(!showlink);
  };
  return (
    <>
      <header>
        <div className="image-container" id="home">
          <nav className="navbar">
            <Fade duration="4000" triggerOnce="true">
              <div className="logo" triggerOnce="true">
                <img src={Logo} alt="" />
              </div>
            </Fade>
            <button type="button" className="btn-menu" onClick={handleClick}>
              <img src={Hamburger} alt="ham" />
            </button>
          </nav>
          <div className="creatives">
            <h1 className="word">
              WE ARE <br /> CREATIVES
            </h1>
            <h1 className="word">
              WE ARE <br /> DESIGNERS
            </h1>
            <h1 className="word">
              WE ARE <br /> ARTISTIC
            </h1>
            <h1 className="word">
              WE ARE <br /> INNOVATIVES
            </h1>
            <img src={Arrow} alt="arrow" className="arrow" />
          </div>
          <div
            className={`${
              showlink ? "links-container  show-container" : "links-container"
            }`}
          >
            <p>
              <Link to="about" smooth={true} spy={true} activeClass="active">
                About
              </Link>
            </p>
            <p>
              <Link to="service" smooth={true} spy={true} activeClass="active">
                Services
              </Link>
            </p>
            <p>
              <Link
                to="review-header"
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Testimonials
              </Link>
            </p>
            <Link to="contact" smooth={true} spy={true} activeClass="active">
              <button type="button">CONTACT</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
