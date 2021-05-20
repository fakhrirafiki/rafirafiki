import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from "../../../constants/initialType";

const iniState = {
  currentUser: {},
  isLoading: {},
};

export default function Auth(state = iniState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { token: action.payload };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
