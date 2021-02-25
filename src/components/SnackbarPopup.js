import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { notificationActions } from '../_actions/notification.actions';

export default function SnackbarPopup() {
  const dispatch = useDispatch();

  const { isOpen, message, type } = useSelector(
    (state) => state.notification
  );

  function handleClose() {
    dispatch(notificationActions.clear());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      onClose={handleClose}
      open={isOpen}
      autoHideDuration={5000}
      aria-describedby="client-snackbar"
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
