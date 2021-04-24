import React from 'react';
import { Container } from './styles';
import { StyledCard, Gap, ProfileImage, Name, Description } from '../../styledElements';
import { profileImg } from '../../../assets';


function MainContent() {
    return (
        <Container>
            <StyledCard>
                <ProfileImage src={profileImg} alt="rafi-rafiki photo" />
                <Name>RAFI-RAFIKI</Name>
                <Description>
                    Developer based in Bandung, Indonesia. Currently, I'm a Developer at AVANA working on reseller management. I love working on side projects and building useful products.
                </Description>
                <Gap height="20px" />
                <Description gray>
                    Let's get connect further, I have some questions for you about my life.
            </Description>
            </StyledCard>
            <StyledCard>

            </StyledCard>
        </Container>

    );
}

export default MainContent;
