import { LOGIN_SUCCESSFULLY } from './user.constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

export function users(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
