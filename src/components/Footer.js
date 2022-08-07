import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

//Get in Touch --> I'm open to new opportunites and experiences. If you have any information, feel free to contact me anytime
//then add the trademark

const Footer = () => {
  return (
    
    <FooterContainer>
        <FooterLinksWrapper>
            <FooterDescription>
                <h1>Ataka</h1>
                <p>Whats good</p>
            </FooterDescription>

            <FooterLinkItem>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/explore">Explore</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/misc">Misc</FooterLink>
                <FooterLink to="/projects">Projects</FooterLink>
            </FooterLinkItem>

        </FooterLinksWrapper>

        <FooterLinksWrapper>

            <FooterLinkItem>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/about">Meme</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Misc</FooterLink>
                <FooterLink to="/">Test</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/about">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
               
            </FooterLinkItem>

        </FooterLinksWrapper>

    </FooterContainer>


  )
}

export default Footer


//review the layout.js page because what it does si that each page will have that footer

const FooterContainer = styled.div`

    padding: 5rem calc((100vw-1100px)/2);
    display: grid;
    grid-template-columns: repeat(2,1fr);
    color: #000;
    background: #fafafb;

`

const FooterDescription = styled.div`

    padding: 0 2rem;

    h1{
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }

`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }

`


const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px){
        padding: 1rem;
    }

`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`



