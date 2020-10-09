import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
  h1,h2,h3,h4,h5,h6, a{
    font-family: Poppins, Roboto, sans-serif;
  }
  a{
    text-decoration: none;
    color: ${p => p.theme.colors.white};
    cursor: pointer;
    transition: opacity 0.5s;
    text-decoration: underline;
    &:hover{
      text-decoration: none;
      opacity: 0.8;
    } 
  }
`
