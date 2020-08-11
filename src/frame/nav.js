import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BASE_URL as POSTS_BASE_URL } from "../posts/constants"

const WIDTH = "8rem"

const NavBackground = styled.div`
  min-width: ${WIDTH};
`
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${WIDTH};
  padding: 5rem 0;
  text-lign: right;
  color: var(--color-text-light);
`

const NavLink = styled(props => (
  <Link partiallyActive={true} activeClassName="active" {...props} />
))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-light);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  > i {
    margin-right: 1rem;
  }
  :hover,
  &.active {
    background-color: rgba(0, 0, 0, 0.2);
    color: coral;
    padding-right: 1.25rem;
  }
  &.active:hover {
    opacity: 0.8;
    padding-right: 1.15rem;
  }
  :active {
    filter: hue-rotate(30deg);
  }
`

export default () => (
  <NavBackground>
    <NavContainer>
      <NavLink to="/" partiallyActive={false}>
        <i className="fas fa-fire-alt"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to={POSTS_BASE_URL}>
        <i className="fas fa-sticky-note" />
        <span>Posts</span>
      </NavLink>
    </NavContainer>
  </NavBackground>
)
