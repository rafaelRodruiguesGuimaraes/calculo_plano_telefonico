
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #D5D4C6;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px sans-serif;
    }
    button {
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6 strong {
        font-weight: 500;
    }
`;