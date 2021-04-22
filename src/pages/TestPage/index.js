import React from 'react';
import { userLoggedIn, userLoggedOut } from '../../redux/actions/Auth';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

function TestPage({ userLoggedIn, userLoggedOut, ...props }) {

    console.log('props', props);

    const user = {
        name: 'Rafiki',
        token: 12345
    };

    const handleLogin = () => {
        console.log('A');
        userLoggedIn(user);
        console.log('B');
    };

    const handleLogout = () => {
        userLoggedOut();
    };
    return (
        <div>
            Rafi Rafiki
            <h1 onClick={handleLogin}>LOG IN</h1>
            <h1 onClick={handleLogout}>LOG OUT</h1>
        </div>
    );
}

export default
    withRouter(connect(null, {
        userLoggedIn, userLoggedOut
    })(TestPage));

