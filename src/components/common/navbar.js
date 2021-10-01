import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../images/ukc-logo-m.svg";
//import { SiTwitter } from "react-icons/si";

const Navbar = ({ siteTitle }) => (
  <nav className="py-4 flex items-center font-display font-bold uppercase">
    <Link to="/" className="flex-grow mr-5">
      <img src={logo} className="w-40 md:w-48" alt="Upgrade King County Logo" />
      <h1 className="sr-only">{siteTitle}</h1>
    </Link>
    <Link to="/about" className="mr-5 text-green sm:text-lg md:text-xl">
      About&nbsp;Us
    </Link>
    <Link to="/updates" className="text-green sm:text-lg md:text-xl">
      Updates
    </Link>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: "",
};

export default Navbar;
