import * as emailValidator from 'email-validator';
import { userService } from '../../services/user.service';
import { notificationActions } from '../notification/notification.actions';
import { LOGIN_SUCCESSFULLY } from './user.constants';
import { history } from '../../helpers';

export const userActions = {
  subscribe,
  login,
  register,
  logOut
};

function subscribe(email) {
  return async (dispatch) => {
    try {
      if (!emailValidator.validate(email)) {
        dispatch(notificationActions.error('invalid email'));
      } else {
        await userService.subscribe(email);
        dispatch(notificationActions.success('Subscribe successfully'));
      }
    } catch (e) {
      dispatch(notificationActions.error('Subscribe fail'));
    }
  };
}

function register(user) {
  return async (dispatch) => {
    try {
      await userService.register(user);
      dispatch(notificationActions.success('Create a new account successfully'));
      history.push('/login');
    } catch (e) {
      console.log(e);
      dispatch(notificationActions.error('Create a new account unsuccessfully'));
    }
  };
}

function login(email, password) {
  return async (dispatch) => {
    try {
      const result = await userService.login(email, password);
      if (result.data.length === 0) {
        dispatch(notificationActions.error('Invalid email or password'));
      } else {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const user = result.data[0];
        delete user.password;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginSuccessfully(user));
        history.push('/user-profile');
      }
    } catch (e) {
      dispatch(notificationActions.error('login fail'));
    }
  };
}

function loginSuccessfully(user) {
  return { type: LOGIN_SUCCESSFULLY, user };
}

function logOut() {
  return (dispatch) => {
    try {
      userService.logOut();
      history.push('/login');
    } catch (e) {
      dispatch(notificationActions.error('Logout fail'));
    }
  };
}
