import React from 'react';
import { useHistory } from 'react-router-dom';
import { TWEETS_TEXT } from '../../../../constants';

// import { } from '../../../styledElements';
import { Wrapper, LinkIconWrapper, StyledTweetCard, WrapperContent, ClockIcon, GrayTextIcon, Text, ProfileImage, PinIcon, IconsWrapper, Icon, MainImage } from './styles';
import { profileImg, pinIc, clockIc, shareIc, commentIc } from '../../../../assets';

function TweetsFeed() {
    let history = useHistory();
    const handleClickTweet = () => {
        history.push(`/${TWEETS_TEXT}/asd`);
    };

    return (
        <StyledTweetCard onClick={handleClickTweet}>
            <PinIcon src={pinIc} />
            <Wrapper>
                <ProfileImage src={profileImg} />
                <WrapperContent>
                    <GrayTextIcon><ClockIcon src={clockIc} />∙∙∙ 10 days ago</GrayTextIcon>
                    <Text>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
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
    );
}

export default TweetsFeed;
