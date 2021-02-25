import { notificationConstants } from '../_constants';

export const notificationActions = {
  success,
  error,
  clear,
  warning
};

function success(message) {
  return (dispatch) => {
    dispatch({ type: notificationConstants.SUCCESS, message });
  };
}

function warning(message) {
  return (dispatch) => {
    dispatch({ type: notificationConstants.WARNING, message });
  };
}

function error(message) {
  return (dispatch) => {
    dispatch({ type: notificationConstants.ERROR, message });
  };
}

function clear() {
  return (dispatch) => {
    dispatch({ type: notificationConstants.CLEAR });
  };
}
