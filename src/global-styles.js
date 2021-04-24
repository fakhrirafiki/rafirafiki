import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        transition: all .2 ease;
    }

    html, body {
        font-family: 'Archivo', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F0F2F5;
        /* color: #333333; */
        font-size: 14px;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

`;
