import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    line-height: 1;
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
