import logo from "../image/logo.png";
import "./index.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbartext, setNavbar] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Dhaki Logo" className="logo" />
        </div>

        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen && (
            <div className="cancel-btn" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          )}
          <li
            onClick={() => setNavbar("podcast")}
            className={navbartext === "contact" ? "active" : ""}
          >
            Home {navbartext === "podcast" && <hr />}
          </li>
          <li
            onClick={() => setNavbar("video")}
            className={navbartext === "about" ? "active" : ""}
          >
            Videos {navbartext === "video" && <hr />}
          </li>

          <li
            onClick={() => setNavbar("home")}
            className={navbartext === "home" ? "active" : ""}
          >
            Podcast {navbartext === "home" && <hr />}
          </li>
          <li
            onClick={() => setNavbar("blog")}
            className={navbartext === "about" ? "active" : ""}
          >
            Blogs{navbartext === "blog" && <hr />}
          </li>
          <li
            onClick={() => setNavbar("portfolio")}
            className={navbartext === "contact" ? "active" : ""}
          >
            Portfolios {navbartext === "portfolio" && <hr />}
          </li>
        </div>
        <button className="icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </>
  );
};
export default Navbar;
