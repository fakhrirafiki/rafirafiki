import React from 'react';
import {
    Container, Wrapper, ProfileImage, WrapperContent, GrayTextIcon, ClockIcon, Text, MainImage, IconsWrapper, LinkIconWrapper, Icon
} from './styles';
import { StyledCard, HoriontalLine, Gap } from '../../components/styledElements';
import CommentSection from '../../components/blocks/CommentSection';
import { profileImg, clockIc, shareIc } from '../../assets';


function TweetScreen() {
    return (
        <Container>
            <StyledCard>
                <Wrapper>
                    <ProfileImage src={profileImg} />
                    <WrapperContent>
                        <GrayTextIcon><ClockIcon src={clockIc} />∙∙∙ 10 days ago</GrayTextIcon>
                        <Text>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
                        GGG
                            </Text>

                        <MainImage src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg" />
                    </WrapperContent>
                </Wrapper>
                <IconsWrapper>
                    <GrayTextIcon>
                        <LinkIconWrapper>
                            <Icon src={shareIc} marginLeft={20} /> Share
                        </LinkIconWrapper>
                    </GrayTextIcon>
                </IconsWrapper>
                <HoriontalLine position="absolute" />
                <Gap />
                <CommentSection />
            </StyledCard>
        </Container>
    );
}

export default TweetScreen;
