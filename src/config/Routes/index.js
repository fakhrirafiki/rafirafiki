import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainApp from '../../pages/MainApp'
import TFIDF from '../../pages/TFIDF'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/tfidf'>
          <TFIDF />
        </Route>
        <Route path='/'>
          <MainApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
