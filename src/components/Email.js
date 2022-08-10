import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/gatsby-icon.png'
// import { SiLinkedin } from 'react-icons/si'
import { Button } from './Button'

//make sure to add some sort of database
//find a new image as an overlay

const Email = () => {
  return (
    <EmailContainer id = "contactInfo">
        <EmailContent>
            <h1>Reach Out! </h1>
            <p>Open to new opportunities and challenges (RESUME)</p>
            <form action="https://formsubmit.co/ca04aa0b13a65af34776b6f79e419393" method="POST">
                <FormWrap>
                    {/* HoneyPot */}
                    <input type="text" name="_honey" style = { {display: "none"} } />

                    {/* disable captcha */}
                    <input type = "hidden" name="_captcha" value = "false"/>

                    {/* reroute to succes.js */}
                    {/* <input type = "hidden" name="_next" to="/succes.js" /> */}

                    <label htmlFor='firstNameLastName'>
                        <input type ='text' placeholder='John/Jane Doe' name = "Full&nbsp;Name" id='firstNameLastName' required/>
                    </label>
                   
                    <label htmlFor='email'>
                        <input type ='email' placeholder='example@gmail.com' name = "Email" id='email' required/>
                    </label>

                    <label htmlFor='message'>
                        <input type= 'text' placeholder='message' id='message' name = "Message" required/>
                    </label>

                    <Button as="button" type="submit" primary = "true" round = "true" 
                    css={`height: 48px; 
                        @media screen and (max-width: 768px) { 
                            width: 100%; min-width: 350px;
                        }
                        @media screen an (max-width: 400px){
                            width: 100%;
                            min-width: 250px;
                        }
                        
                        `}
                    
                    >Send</Button>
                </FormWrap>
                
            </form>
            {/* <a href = "https://www.linkedin.com/in/janrejasii" rel = "noopener noreferrer" > 
  
            <SiLinkedin css={`color: white; font-size: 3rem;
                &:hover{
                cursor: pointer;
                }

            `} />
              </a> */}
        </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
    /* background: linear-gradient(
        180deg,
        rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.5) 35%,
        rgba(0,0,0,0.1) 100%

    ),
    url(${EmailBg}) no-repeat center; */
    background: rgb(145,145,145);

    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

`

const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p{
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form{
        z-index: 10;
    }

`

const FormWrap = styled.div`

    input{
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (min-width: 769px) and (max-width: 1250px){
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;

        input{
            margin-bottom: 1rem;
            margin-right: 0;
        }
    }
   

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 1rem 2rem;

        input{
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }

`