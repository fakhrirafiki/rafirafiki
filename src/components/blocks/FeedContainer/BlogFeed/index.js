import React from 'react';
import { Container } from './styles';
import BlogItem from './BlogItem';

function BlogFeed() {
    return (
        <Container>
            {Array(40).fill().map(() => (
                <BlogItem />
            ))}
        </Container>
    );
}

export default BlogFeed;
