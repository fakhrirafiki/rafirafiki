import React from 'react';
import { userLoggedIn, userLoggedOut } from '../../redux/actions/Auth';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';

function TestPage({ ...props }) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log('state', state);


    console.log('props', props);

    const user = {
        name: 'Rafiki',
        token: 12345
    };

    const handleLogin = () => {
        console.log('A');
        dispatch(userLoggedIn(user));
        console.log('B');
    };

    const handleLogout = () => {
        dispatch(userLoggedOut());
    };
    return (
        <div>
            Rafi Rafiki
            <h1 onClick={handleLogin}>LOG IN</h1>
            <h1 onClick={handleLogout}>LOG OUT</h1>
        </div>
    );
}

export default withRouter(TestPage);

