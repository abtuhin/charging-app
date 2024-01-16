import { createGlobalStyle } from 'styled-components';

export const theme = {
  fonts: {
    PRIMARY_FONT: "Satoshi",
    SECONDARY_FONT: "Space Grotesk"
  },
  fontSizes: {
    FS26: "26px",
    FS18: "18px",
    FS16: "16px",
    FS12: "12px",
  },
  fontWeights: {
    FW700: 700,
    FW500: 500,
    FW400: 400,
  },
  colors: {
    PRIMARY: "#1F665B",
    SECONDARY: "#007FA3",
    TERTIARY: "#750000",
    BORDER: "#ccc"
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #FAF8FF;
    font-family: 'Satoshi', sans-serif;
    color: #3B3B3B;
    height: 100vh;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 20%;
    margin-right: 20%;
  }
  a {
    text-decoration: none;
  }
`;
