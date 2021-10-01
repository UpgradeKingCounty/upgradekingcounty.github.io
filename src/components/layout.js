import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import Navbar from "./common/navbar";
import Footer from "./common/footer";
import SEO from "./seo";

// Make these tags available in .mdx files without having to import them first.
const SHORTCODES = { SEO };

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MDXProvider components={SHORTCODES}>
        <div className="lg:container lg:mx-auto px-5 sm:px-8">
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <section className="ukc-body-content leading-normal text-gray-600">
            {children}
          </section>
          <Footer />
        </div>
      </MDXProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
