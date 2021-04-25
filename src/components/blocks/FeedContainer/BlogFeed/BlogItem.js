import React from 'react';
import { useHistory } from 'react-router-dom';
import { BLOG_TEXT } from '../../../../constants';

import { StyledBlogCard, PinIcon, Wrapper, BlogImage, WrapperContent, GrayTextIcon, ClockIcon, Text, IconsWrapper, LinkIconWrapper, Icon } from './styles';
import { pinIc, shareIc, commentIc, folderIc } from '../../../../assets';

function BlogItem() {

    let history = useHistory();
    const handleClickBlog = () => {
        history.push(`/${BLOG_TEXT}/asfd`);
    };


    return (
        <StyledBlogCard onClick={handleClickBlog}>
            <PinIcon src={pinIc} />
            <Wrapper>
                <BlogImage src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg" />
                <WrapperContent>
                    <GrayTextIcon><ClockIcon src={folderIc} />React JS</GrayTextIcon>
                    <Text bold>Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman
                    GGG
                            </Text>
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
    );
}

export default BlogItem;
