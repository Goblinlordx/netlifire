import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BASE_URL as POSTS_BASE_URL } from "../post/constants"

const WIDTH = "7rem"

const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  i {
    margin-right: 1rem;
  }
`

export default () => (
  <div
    style={{
      minWidth: WIDTH,
    }}
  >
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: WIDTH,
        padding: "1rem 0",
        textAlign: "right",
        color: "#FFF",
      }}
    >
      <NavLink to="/">
        <i className="fas fa-fire-alt"></i>
        Home
      </NavLink>
      <NavLink to={POSTS_BASE_URL}>
        <i className="fas fa-sticky-note" />
        Posts
      </NavLink>
    </div>
  </div>
)
