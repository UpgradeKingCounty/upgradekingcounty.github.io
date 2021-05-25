import React from "react";
import STCLogo from "../../images/stc-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 py-8 px-5 sm:px-8 border-t-2 border-blue-dark text-sm text-gray-600">
      <div className="flex items-center">
        <a href="https://sharethecities.org">
          <img
            className="w-32"
            src={STCLogo}
            alt="Share the Cities Action Fund"
          />
        </a>
        <div className="ml-8 md:ml-24">
          <h3 className="font-bold">Share the Cities</h3>
          <a className="block underline" href="https://sharethecities.org">
            About
          </a>
          <a
            className="block underline"
            href="https://twitter.com/sharethecities"
          >
            Twitter
          </a>
        </div>
        <div className="ml-8 md:ml-24">
          <h3 class="font-bold">Contribute</h3>
          <a
            className="block underline"
            href="https://sharethecities.org/contact-1"
          >
            Contact
          </a>
          <a
            className="block underline"
            href="https://github.com/UpgradeKingCounty/upgradekingcounty.github.io"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-xs">
        Copyright © {currentYear} Upgrade King County
      </p>
    </footer>
  );
}

export default Footer;
