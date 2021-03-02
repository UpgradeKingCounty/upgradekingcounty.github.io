import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../images/upgrade-seattle-stc-logo.png";
import { SiTwitter } from "react-icons/si";
import "./navbar.css";

const Navbar = ({ siteTitle }) => (
  <section className="navbar-container">
    <section className="navbar-logo-container">
      <Link to="/" className="navbar-logo-link">
        <img
          className="navbar-logo"
          src={logo}
          alt="Share the Cities Broadband working group logo."
        />
        <h1 className="navbar-logo-text">{siteTitle}</h1>
      </Link>
    </section>
    <section className="navbar-link-container">
      <Link to="/about">
        <h1 className="navbar-link">About Us</h1>
      </Link>
      <Link to="/updates">
        <h1 className="navbar-link">Updates</h1>
      </Link>
    </section>
  </section>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: "",
};

export default Navbar;
