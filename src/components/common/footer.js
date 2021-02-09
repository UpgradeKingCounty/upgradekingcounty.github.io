import React from "react";
import STCLogo from "../../images/share-the-cities-logo.png";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div>
        <img src={STCLogo} alt="Share the Cities Logo" />
      </div>
      <div className="footer-link-container">
        <div className="footer-org-column">
          <h2>Share the Cities</h2>
          <a href="https://sharethecities.org">About</a>
          <a href="https://twitter.com/sharethecities">Twitter</a>
        </div>
        <div className="footer-org-column">
          <h2>Contribute</h2>
          <a href="https://sharethecities.org/contact-1">Contact</a>
          <a href="https://github.com/UpgradeKingCounty/upgradekingcounty.github.io">
            GitHub
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-copyright-container">
        <p>Copyright © {currentYear} Share the Cities</p>
      </div>
    </div>
  );
}

export default Footer;
