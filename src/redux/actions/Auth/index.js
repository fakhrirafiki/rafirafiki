import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../../constants/initialType';

export const userLoggedIn = (user) => (dispatch) => {
    console.log(`${user.name} is authenticated`);

    dispatch({
        type: USER_LOGGED_IN,
        payload: user.token
    });
};

export const userLoggedOut = () => (dispatch) => {
    console.log(`User Logged Out`);
    dispatch({
        type: USER_LOGGED_OUT,
    });
};