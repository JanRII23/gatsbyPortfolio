import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    /* *{
        // font-family: 'Lacquer', cursive;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } */


    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lacquer', cursive;
        
        
        /* scroll-behavior: smooth; */
    }
    ::-webkit-scrollbar{
        width: 0px;
    }

    ::-webkit-scrollbar-track{
        background: transparent;
    }


   

`



