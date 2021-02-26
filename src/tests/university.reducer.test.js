import { notification as notificationReducer } from '../redux/notification/notification.reducer';
import { notificationConstants } from '../redux/notification/notification.constants';

describe('notificationReducers', () => {
  it('handles SUCCESS action', () => {
    const expectedState = {
      isOpen: true,
      message: 'success message',
      type: 'success'
    };

    const actualState = notificationReducer(
      {},
      { type: notificationConstants.SUCCESS, message: 'success message' },
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles ERROR action', () => {
    const expectedState = {
      isOpen: true,
      message: 'error message',
      type: 'error'
    };

    const actualState = notificationReducer(
      {},
      { type: notificationConstants.ERROR, message: 'error message' },
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles CLEAR action', () => {
    const previousState = {
      isOpen: true,
      message: 'error message',
      type: 'error'
    };

    const expectedState = {
      ...previousState,
      isOpen: false,
      message: ''
    };

    const actualState = notificationReducer(
      previousState,
      { type: notificationConstants.CLEAR },
    );

    expect(expectedState).toEqual(actualState);
  });
});
