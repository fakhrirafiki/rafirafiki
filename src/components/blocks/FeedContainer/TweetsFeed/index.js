import React from 'react';
import { Container } from './styles';
import TweetsItem from './TweetsItem';

function TweetsFeed() {
    return (
        <Container>
            {Array(40).fill().map(() => (
                <TweetsItem />
            ))}
        </Container>
    );
}

export default TweetsFeed;
