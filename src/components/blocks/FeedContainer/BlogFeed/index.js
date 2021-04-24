import React from 'react';
import { Container, StyledBlogCard, PinIcon, Wrapper, BlogImage, WrapperContent, GrayTextIcon, ClockIcon, Text, IconsWrapper, LinkIconWrapper, Icon } from './styles';
import { pinIc, profileImg, clockIc, shareIc, commentIc, folderIc } from '../../../../assets';

function BlogFeed() {
    return (
        <Container>
            {Array(40).fill().map(() => (
                <StyledBlogCard>
                    <PinIcon src={pinIc} />
                    <Wrapper>
                        <BlogImage src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg" />
                        <WrapperContent>
                            <GrayTextIcon><ClockIcon src={folderIc} />React JS</GrayTextIcon>
                            <Text bold>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
                            GGG
                            </Text>
                            {/* <Text>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
                            GGG
                            </Text> */}
                        </WrapperContent>
                    </Wrapper>
                    <IconsWrapper>
                        <GrayTextIcon>
                            <LinkIconWrapper>
                                <Icon src={commentIc} /> 123
                            </LinkIconWrapper>
                            <LinkIconWrapper>
                                <Icon src={shareIc} marginLeft={20} />
                            </LinkIconWrapper>
                        </GrayTextIcon>
                    </IconsWrapper>
                </StyledBlogCard>
            ))}
        </Container>
    );
}

export default BlogFeed;
