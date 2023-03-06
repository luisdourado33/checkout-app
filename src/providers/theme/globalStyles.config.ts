import { createGlobalStyle } from "styled-components";

import DMSansTTF from "assets/fonts/dm-sans/DMSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DM Sans, sans-serif,
    src: url(${DMSansTTF}) format('truetype')
  }

  #root {
    width: 100%;
    height: 100%;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
  }
`;
