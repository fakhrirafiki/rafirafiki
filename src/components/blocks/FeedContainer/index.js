import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Container } from './style';
import FeedContent from './TabsContent';
import TweetsFeed from './TweetsFeed';
import BlogFeed from './BlogFeed';
import PodcastFeed from './PodcastFeed';

import { TWEETS_TEXT, BLOG_TEXT, PODCAST_TEXT } from '../../../constants';


function FeedContainer({ location, ...props }) {
    return (
        <Container>
            <Switch>
                <Route path="/" exact><FeedContent /></Route>
                <Route path="/:id"><FeedContent /></Route>
            </Switch>

            <Switch>
                <Route path={`/${TWEETS_TEXT}`}><TweetsFeed /></Route>
                <Route path={`/${BLOG_TEXT}`}><BlogFeed /></Route>
                <Route path={`/${PODCAST_TEXT}`}><PodcastFeed /></Route>
                <Route path='/'><TweetsFeed /></Route>
            </Switch>
        </Container>
    );
}

export default withRouter(FeedContainer);
