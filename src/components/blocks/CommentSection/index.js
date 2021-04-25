import React from 'react';
import InputComment from './InputComment';
import UserComment from './UserComment';
import { Container } from './styles';

function CommentSection() {
    return (
        <Container>
            <InputComment />
            {Array(10).fill().map(() => (
                < UserComment />
            ))}
        </Container>
    );
}

export default CommentSection;
