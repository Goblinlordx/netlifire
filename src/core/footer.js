import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: #353e4;
`

export default () => (
  <Footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Footer>
)
