import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Baloo 2", cursive;
  }

  .container {
    width: 100%;
    max-width: 1168px;
    padding: 0 24px;
    margin: 0 auto;
  }

  :focus {
    outline: transparent;
  }
`
