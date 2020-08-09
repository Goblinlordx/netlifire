/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Nav />
          <main style={{ flexGrow: 1, backgroundColor: `#FFF` }}>
            <div style={{ minHeight: "100vh" }}>{children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
