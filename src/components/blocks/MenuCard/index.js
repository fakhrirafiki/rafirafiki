import React from 'react';
import { Link } from 'react-router-dom';
import { Container, MenuList, MenuItem } from './styles';

function ProfileCard() {
    return (
        <Container>
            <MenuList>
                <Link to="/about"><MenuItem>ABOUT ME</MenuItem></Link>
                <Link to="/cv"><MenuItem>CV</MenuItem></Link>
                <Link to="/contact"><MenuItem>CONTACT</MenuItem></Link>
                <Link to="/work"><MenuItem>WORK</MenuItem></Link>
            </MenuList>

        </Container>
    );
}

export default ProfileCard;
