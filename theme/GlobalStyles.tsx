import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-image: linear-gradient( #beb7b7, #d6d6d6);

  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
 
  * {
 
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  
`;



export default GlobalStyles;
