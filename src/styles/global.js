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
    font-family: -apple-system, Roboto, sans-serif, serif;
    background-color: #f4f4f4;
    color: #232129;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
