import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        transition: all .2 ease;

        &::selection {
            background: #e9bc3fc4; 
            color: #fff;
        }
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

    a, a:link, a:visited, a:hover, a:active {
        text-decoration: none;
        color: unset;
    }


    // Youtube Video Player
    .video-container { 
        position: relative; 
        padding-bottom: 56.25%; 
        padding-top: 30px; 
        height: 0; 
        overflow: hidden; }

    .video-container iframe, 
    .video-container object, 
    .video-container embed { 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
     }


     //ScrollBar
     /* width */
        ::-webkit-scrollbar {
            width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #ccc; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #E9BC3F; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #fff; 
        }
`;
