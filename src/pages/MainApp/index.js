import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileCard from '../../components/blocks/ProfileCard';
import MainContent from '../../components/blocks/MainContent';
import Header from '../../components/blocks/Header';
import { Container, ContentContainer } from './styles';

const MainApp = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <Switch>
                    <Route path='/blog/:blogId'>Blog yang ada ID nya</Route>
                    <Route path='/tweets/:tweetsId'>Tweets yang ada ID nya</Route>
                    <Route path='/podcast/:podcastId'>Podcast yang ada ID nya</Route>
                    <Route path='/'><MainContent /></Route>
                </Switch>
                <ProfileCard />
            </ContentContainer>
        </Container>
    );
};

export default MainApp;
