import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f6f9;
    color: #2c3e50;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    color: #3498db;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
