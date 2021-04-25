import React, { } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { Wrapper, List, Item, Image, Text, Link, ActiveLineMark } from './style';
import { TWEETS_TEXT, BLOG_TEXT, PODCAST_TEXT } from '../../../constants';

import {
    blogIc,
    // blogIcYellow,
    podcastIc,
    // podcasIcYellow,
    tweetIc,
    // tweetIcYellow,
} from '../../../assets';

function FeedContent({ ...props }) {
    const { id } = useParams();

    return (
        <>
            <Wrapper>
                <List>
                    <Item>
                        <Link to={TWEETS_TEXT}>
                            <Image src={tweetIc} alt="" />
                            <Text active={id !== BLOG_TEXT && id !== PODCAST_TEXT}>Tweets</Text>
                        </Link>
                        <ActiveLineMark active={id !== BLOG_TEXT && id !== PODCAST_TEXT} />
                    </Item>
                    <Item>
                        <Link to={BLOG_TEXT}>
                            <Image src={blogIc} alt="" />
                            <Text active={id === BLOG_TEXT}>Blog</Text>
                        </Link>
                        <ActiveLineMark active={id === BLOG_TEXT} />
                    </Item>
                    <Item>
                        <Link to={PODCAST_TEXT}>
                            <Image src={podcastIc} alt="" />
                            <Text active={id === PODCAST_TEXT}>Podcast</Text>
                        </Link>
                        <ActiveLineMark active={id === PODCAST_TEXT} />
                    </Item>
                </List>
            </Wrapper>
        </>
    );
}

export default withRouter(FeedContent);
