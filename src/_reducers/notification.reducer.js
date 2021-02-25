import { notificationConstants } from '../_constants';

export function notification(state = {}, action) {
  switch (action.type) {
    case notificationConstants.SUCCESS:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: 'success'
      };
    case notificationConstants.INFO:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: 'info'
      };
    case notificationConstants.WARNING:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: 'warning'
      };
    case notificationConstants.ERROR:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: 'error'
      };
    case notificationConstants.CLEAR:
      return {
        ...state,
        isOpen: false,
        message: ''
      };
    default:
      return state;
  }
}
