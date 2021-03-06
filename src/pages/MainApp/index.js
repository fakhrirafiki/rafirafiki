import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProfileCard from '../../components/blocks/ProfileCard'
import MenuCard from '../../components/blocks/MenuCard'
import Sidebar from '../../components/blocks/Sidebar'
import MainContent from '../../components/blocks/MainContent'
import Header from '../../components/blocks/Header'
import {Container, ContentContainer} from './styles'
import TweetsScreen from '../TweetsScreen'
import BlogScreen from '../BlogScreen'
import PodcastScreen from '../PodcastScreen'
import {TWEETS_TEXT, BLOG_TEXT, PODCAST_TEXT} from '../../constants'
import TFIDF from '../TFIDF'

const MainApp = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Switch>
          <Route path={`/${TWEETS_TEXT}/:tweetsId`}>
            <TweetsScreen />
          </Route>
          <Route path={`/${BLOG_TEXT}/:blogId`}>
            <BlogScreen />
          </Route>
          <Route path={`/${PODCAST_TEXT}/:podcastId`}>
            <PodcastScreen />
          </Route>
          <Route path='/'>
            <MainContent />
          </Route>
        </Switch>
        <Sidebar>
          <MenuCard />
          <ProfileCard />
        </Sidebar>
      </ContentContainer>
      <TFIDF />
    </Container>
  )
}

export default MainApp
