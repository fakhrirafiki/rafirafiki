import React from 'react';
// import YouTube from 'react-youtube';
import YouTubePlayer from '../../components/elements/YouTubePlayer';
import { Container, Wrapper, ArticleWrapper, TitleText, ArticleTextWrapper, ProfileIcon } from './styles';
import { StyledCard, HoriontalLine, Gap } from '../../components/styledElements';
import CommentSection from '../../components/blocks/CommentSection';
import { profileImg } from '../../assets';


function PodcastScreen() {
    return (
        <Container>
            <StyledCard noPadding>
                <Wrapper>
                    <YouTubePlayer />
                    <ArticleWrapper>
                        <ProfileIcon src={profileImg} />
                        <TitleText>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
                            {/* <GrayTextIcon>
                                <DetailsWrapper nowrap>
                                    Rafi Rafiki ∙∙∙ 10 mins read
                                </DetailsWrapper>
                                <DetailsWrapper latterSpacingWide>
                                    #Blog #Category
                                </DetailsWrapper>
                            </GrayTextIcon> */}
                        </TitleText>
                        <ArticleTextWrapper>
                            <p>
                                LaLiga is back! After winning the Copa del Rey, Barça have the objective of fighting for the league title until the very end of the season. This Thursday, Getafe visit Camp Nou (10.00pm CEST).
                            </p>
                            <p>
                                Everything in the Match Center
                                Don’t forget that we have full coverage of the game, including the build-up live from the stadium and post-match reactions in our Match Center on the Club's official website.
                            </p>

                        </ArticleTextWrapper>
                    </ArticleWrapper>

                </Wrapper>
                <HoriontalLine position="absolute" />
                <Gap />
                <CommentSection />
            </StyledCard>
        </Container>
    );
}

export default PodcastScreen;
