import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonsWrapper, Logo } from './styles';
import Button from '../../elements/Button';
// import ListMenu from './listMenu';

function Header() {
    return (
        <Container>
            <ButtonsWrapper>
                <Logo><Link to="/">RAFI-RAFIKI</Link></Logo>
                <Button right secondary>Login</Button>
                <Button >Register</Button>
            </ButtonsWrapper>
        </Container>
    );
}

export default Header;
