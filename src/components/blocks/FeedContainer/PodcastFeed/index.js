import React from 'react';
import { Container } from './styles';
import PodcastItem from './PodcastItem';


function PodcastFeed() {
    return (
        <Container>
            {Array(7).fill().map(() => (
                <PodcastItem />
            ))}
        </Container >
    );
}

export default PodcastFeed;
