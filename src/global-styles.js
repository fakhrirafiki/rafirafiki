import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Archivo', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F0F2F5;
        /* color: #333333; */
        font-size: 16px;
        margin: 0;
    }

    * {
        box-sizing:border-box;
        margin: 0;
    }
`;
