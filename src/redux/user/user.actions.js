import * as emailValidator from 'email-validator';
import { userService } from '../../services/user.service';
import { notificationActions } from '../notification/notification.actions';

export const userActions = {
  subscribe,
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
