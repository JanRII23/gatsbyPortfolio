import * as React from "react"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Seo from "../components/seo"
import styled from "styled-components"

const success = () => (
  <SucessPage>
    <GlobalStyle/>
    <h1>Contact Me!</h1>
    <p>Success! I will get back soon, very soon</p>
  </SucessPage>
)

export const Head = () => <Seo title="Success" />

export default success

const SucessPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* border: 2px solid blue; */
  flex-direction: column;
  
`
