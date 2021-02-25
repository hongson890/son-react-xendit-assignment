import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { notification } from './notification.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  notification
});

export default rootReducer;
