import styled from 'styled-components/macro';
import { StyledCard } from '../../styledElements';
import { Link as Anchor } from 'react-router-dom';

export const Container = styled(StyledCard)`
    padding: 0;
    min-height: 100px;
`;

export const Wrapper = styled.div`
    /* padding: 25px; */
    position: sticky;
    z-index:+1;
    top: 0;
    background: #fff;
`;

export const List = styled.ul`
    /* padding: 25px; */
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Item = styled.li`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
`;


export const Image = styled.img`
    height: 14px;
`;

export const Text = styled.p`
    display: inline-block;
    margin-left: 10px;
    color: ${(props) => props.active ? '#E9BC3F' : 'unset'};
    font-weight: bold;
`;

export const Link = styled(Anchor)`
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 40px;
    transition: all .2s ease;

    &:hover {
        background-color: #F0F2F5;
        /* color: #fff !important; */
    }
`;

export const ActiveLineMark = styled.div`
  background-color: ${(props) => props.active ? '#E9BC3F' : '#CCCCCC'};
  height: ${(props) => props.active ? '2px' : '1px'};
  width: 100%;
`;