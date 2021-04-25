import styled from 'styled-components/macro';

export const Button = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    border-width: 1px;
    border-style: solid;
    text-decoration: none;
    border-radius: 4px;
    background-color: ${props => props.secondary ? '#fff' : '#161616'};
    color: ${props => props.secondary ? '#000000' : '#fff'};
    border-color: ${props => props.secondary ? '#161616' : '#fff'};
    max-width: ${props => props.width || '100px'} !important;
    height: ${props => props.height || '30px'};
    margin: ${props => props.margin || '0 5px'};
    padding: ${props => props.padding || '0 60px'};
    cursor: pointer;
    transition: all .2s ease;

    ${({ right }) => right && `
        margin-left: auto;
    `}

    ${({ left }) => left && `
        margin-right: auto;
    `}

    ${({ center }) => center && `
        margin-right: auto;
        margin-left: auto;
    `}

    ${(props) => props.size === 'small' && `
        font-size: 10px;
        padding: 0 30px;
    `}



    &:hover {
        /* background-color: ${props => props.secondary ? '#161616' : '#fff'};
        color: ${props => props.secondary ? '#fff' : '#161616'};
        border-color: ${props => props.secondary ? '#fff' : '#161616'}; */

        background-color:#E9BC3F;
        color: #fff;
        border-color: #E9BC3F;


        
    }
`;