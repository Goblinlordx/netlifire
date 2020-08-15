import React from "react"
import styled from "styled-components"

const Footer = styled("footer")`
  padding: 0.5rem 1rem;
  text-align: right;
  font-size: 0.75rem;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-light);
  a,
  a:visited {
    color: coral;
    text-decoration: none;
  }
`

export default () => (
  <Footer>
    © {new Date().getFullYear()}, Built by
    {` `}
    <a href="https://www.github.com/Goblinlordx">Ben Baldivia</a>
  </Footer>
)
