import { createGlobalStyle } from "styled-components";

import DMSansTTF from "assets/fonts/dm-sans/DMSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans', sans-serif,
    src: url(${DMSansTTF}) format('truetype')
  }

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

  #root {
    width: 100%;
    height: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;
