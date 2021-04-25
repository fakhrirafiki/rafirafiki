import React from 'react';
import { Container } from './styles';

function ProfileCard(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default ProfileCard;
