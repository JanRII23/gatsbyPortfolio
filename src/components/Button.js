import styled from 'styled-components'
// import {Link} from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const Button = styled(AnchorLink)`
    background: ${({primary}) => (primary ? "white" : "black")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "10px 30px" : "6px 22px")};


    color: black;
    font-size: ${({ big }) => (big ? "16px" : "10px")};
    outline: none;
    border: none;
    min-width: 80px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    /* border-radius: ${({round}) => (round ? "50px" : "none")}; */
    /* text-transform: uppercase; */
    letter-spacing: 2px;

    &:hover{
        /* background: ${({primary}) => (primary ? "#077BF1" : "#F26A2E" )};
        transform: translateY(-2px); */
        letter-spacing: 6px;
    }
`


