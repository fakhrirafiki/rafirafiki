import styled from 'styled-components/macro';
import { StyledCard } from '../../styledElements';

export const Container = styled(StyledCard)`
    padding: 0;
`;


export const Heading = styled.p`
    padding: 10px;
`;

export const MenuList = styled.ul`
    padding: 10px;
    list-style: none;
`;

export const MenuItem = styled.li`
    padding: 10px;
    /* color: rgba(18,18,18,0.40); */
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EBEEF0;
    

    &::before {
        content: '#';
        font-size: 20px;
        margin-right: 15px;
        font-weight: bold;
        color: #1212121f;
    }

    &:hover {
        color: #E9BC3F;
        font-weight: bold;
        /* border-bottom: 2px solid #E9BC3F; */
        /* background-color: #F0F2F5; */
        border-radius: 3px;
    }
`;