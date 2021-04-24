import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Container } from './style';
import FeedContent from './TabsContent';
import TweetsFeed from './TweetsFeed';
import BlogFeed from './BlogFeed';
import PodcastFeed from './PodcastFeed';


function FeedContainer({ location, ...props }) {
    return (
        <Container>
            <Switch>
                <Route path="/" exact><FeedContent /></Route>
                <Route path="/:id"><FeedContent /></Route>
            </Switch>

            <Switch>
                <Route path='/tweets'><TweetsFeed /></Route>
                <Route path="/blog"><BlogFeed /></Route>
                <Route path="/podcast"><PodcastFeed /></Route>
                <Route path='/'><TweetsFeed /></Route>
            </Switch>
        </Container>
    );
}

export default withRouter(FeedContainer);
