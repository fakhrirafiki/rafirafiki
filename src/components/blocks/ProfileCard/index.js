import React from 'react';
import { Container } from './styles';
import { StyledCard } from '../../styledElements';
// import { profileImg } from '../../../assets';
import Button from '../../elements/Button';

function ProfileCard() {
    return (
        <Container>
            <StyledCard>
                <Button secondary>Comment</Button>
            </StyledCard>
        </Container>
    );
}

export default ProfileCard;
