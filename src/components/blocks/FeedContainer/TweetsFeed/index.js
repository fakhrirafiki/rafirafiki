import React from 'react';
// import { } from '../../../styledElements';
import { Container, Wrapper, LinkIconWrapper, StyledTweetCard, WrapperContent, ClockIcon, GrayTextIcon, Text, ProfileImage, PinIcon, IconsWrapper, Icon, MainImage } from './styles';
import { profileImg, pinIc, clockIc, shareIc, commentIc } from '../../../../assets';

function TweetsFeed() {
    return (
        <Container>
            {Array(40).fill().map(() => (
                <StyledTweetCard>
                    <PinIcon src={pinIc} />
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
                                <Icon src={commentIc} /> 123
                            </LinkIconWrapper>
                            <LinkIconWrapper>
                                <Icon src={shareIc} marginLeft={20} /> Share
                            </LinkIconWrapper>
                        </GrayTextIcon>
                    </IconsWrapper>
                </StyledTweetCard>
            ))}
        </Container>
    );
}

export default TweetsFeed;
