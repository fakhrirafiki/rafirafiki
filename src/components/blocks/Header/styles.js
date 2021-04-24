import styled from 'styled-components/macro';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    width:100%;
    margin: auto;
    margin-bottom:10px;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 10%);
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    max-width: 1464px;
`;

export const Logo = styled.div`
    min-height:50px;
    display: flex;
    align-items: center;
    padding: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 24.6857px;
    line-height: 27px;
    letter-spacing: 0.4em;
    color: #000000;
    cursor: pointer;
`;

export const ListMenuContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style:none;
    /* background-color:red; */
    flex-basis: 50%;
    /* flex-shrink: 9999; */
`;

export const MenuItem = styled.li`
    /* flex-basis: ; */
    padding: 0 30px;
    font-family: Archivo;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 36px;
    /* identical to box height, or 200% */

    letter-spacing: 0.04em;

    color: #121212;
`;