import React, { } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { Wrapper, List, Item, Image, Text, Link, ActiveLineMark } from './style';

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
                        <Link to="/tweets">
                            <Image src={tweetIc} alt="" />
                            <Text active={id !== "blog" && id !== "podcast"}>Tweets</Text>
                        </Link>
                        <ActiveLineMark active={id !== "blog" && id !== "podcast"} />
                    </Item>
                    <Item>
                        <Link to="/blog">
                            <Image src={blogIc} alt="" />
                            <Text active={id === 'blog'}>Blog</Text>
                        </Link>
                        <ActiveLineMark active={id === 'blog'} />
                    </Item>
                    <Item>
                        <Link to="/podcast">
                            <Image src={podcastIc} alt="" />
                            <Text active={id === 'podcast'}>Podcast</Text>
                        </Link>
                        <ActiveLineMark active={id === 'podcast'} />
                    </Item>
                </List>
            </Wrapper>
        </>
    );
}

export default withRouter(FeedContent);
