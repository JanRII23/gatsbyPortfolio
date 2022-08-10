import * as React from "react"
// import { GlobalStyle } from "./styles/GlobalStyles"
// import Layout from "../components/layout"
import { GlobalStyle } from "../components/styles/GlobalStyles"

import Seo from "../components/seo"
import styled from "styled-components"

const NotFoundPage = () => (
  <ErrorPage>
    <GlobalStyle/>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ErrorPage>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* border: 2px solid blue; */
  flex-direction: column;
  text-align: center;
  
`
