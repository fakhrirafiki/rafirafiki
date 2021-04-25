import React from 'react';
import { Container, Wrapper, MainBlogImage, ArticleWrapper, TitleText, ArticleTextWrapper, GrayTextIcon, ProfileIcon, DetailsWrapper } from './styles';
import { StyledCard, HoriontalLine, Gap } from '../../components/styledElements';
import CommentSection from '../../components/blocks/CommentSection';
import { profileImg } from '../../assets';


function BlogScreen() {
    return (
        <Container>
            <StyledCard noPadding>
                <Wrapper>
                    <MainBlogImage src={profileImg} />
                    <ArticleWrapper>
                        <TitleText>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
                            <GrayTextIcon>
                                <DetailsWrapper nowrap>
                                    <ProfileIcon src={profileImg} />
                                    Rafi Rafiki ∙∙∙ 10 mins read
                                </DetailsWrapper>
                                <DetailsWrapper latterSpacingWide>
                                    #Blog #Category
                                </DetailsWrapper>
                            </GrayTextIcon>
                        </TitleText>
                        <ArticleTextWrapper>
                            <p>
                                LaLiga is back! After winning the Copa del Rey, Barça have the objective of fighting for the league title until the very end of the season. This Thursday, Getafe visit Camp Nou (10.00pm CEST).
                            </p>
                            <p>
                                Everything in the Match Center
                                Don’t forget that we have full coverage of the game, including the build-up live from the stadium and post-match reactions in our Match Center on the Club's official website.
                            </p>
                            <p>
                                You will also find our minute-by-minute text updates, a link to listen to live English language commentary on Radio Barça and plenty more to keep you entertained!LaLiga is back! After winning the Copa del Rey, Barça have the objective of fighting for the league title until the very end of the season. This Thursday, Getafe visit Camp Nou (10.00pm CEST).
                            </p>
                            <img src={profileImg} alt="" />
                            <p>
                                Everything in the Match Center
                                Don’t forget that we have full coverage of the game, including the build-up live from the stadium and post-match reactions in our Match Center on the Club's official website.
                            </p>
                            <p>
                                You will also find our minute-by-minute text updates, a link to listen to live English language commentary on Radio Barça and plenty more to keep you entertained!
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

export default BlogScreen;
