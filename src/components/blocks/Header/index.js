import React from 'react';
import { Container, ButtonsWrapper, Logo } from './styles';
import Button from '../../elements/Button';
// import ListMenu from './listMenu';

function Header() {
    return (
        <Container>
            <ButtonsWrapper>
                <Logo>RAFI-RAFIKI</Logo>
                <Button right secondary>Login</Button>
                <Button >Register</Button>
            </ButtonsWrapper>
        </Container>
    );
}

export default Header;
