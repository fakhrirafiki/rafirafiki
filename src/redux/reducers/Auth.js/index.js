import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../../../constants/initialType';

export default function Auth(state = {}, action) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { token: action.payload };
        case USER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}