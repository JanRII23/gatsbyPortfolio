

import * as React from "react"
// import Footer from "./Footer"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import SocialContainer from "./SocialFooter"

const Layout = ({ children }) => {
  
  return (
    <>

    
    <GlobalStyle/>
        <SocialContainer/>
        <Header />
        
      
        <main>{children}</main>

       

        {/* <Footer/> */}

     
        
    </>
  )
}


export default Layout

//from my understanding this page acts as if stuff in each page will be included

//so stuff added here will become part of each page
