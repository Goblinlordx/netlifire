import React from "react"
import styled from "styled-components"

const Frame = styled.div`
`
const Content = styled.div`
`

export default ({ children }) => (
  <Frame>
    <Content>{children}</Content>
  </Frame>
)
