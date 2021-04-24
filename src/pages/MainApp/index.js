import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Sidebar } from '../../components';
import ProfileCard from '../../components/blocks/ProfileCard';
// import MenuCard from '../../components/blocks/MenuCard';
import MainContent from '../../components/blocks/MainContent';
import Header from '../../components/blocks/Header';
import { Container, ContentContainer } from './styles';

const MainApp = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <MainContent />
                {/* <MenuCard /> */}
                <ProfileCard />
            </ContentContainer>
        </Container>
    );
};

export default MainApp;
