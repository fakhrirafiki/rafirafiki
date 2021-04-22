import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Sidebar } from '../../components';
import TestPage from '../TestPage';

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            {/* <Sidebar /> */}
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/">
                            <TestPage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default MainApp;
