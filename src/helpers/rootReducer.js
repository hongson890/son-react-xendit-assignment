import { combineReducers } from 'redux';

import { authentication } from '../redux/authentication/authentication.reducer';
import { registration } from '../redux/authentication/registration.reducer';
import { users } from '../redux/user/users.reducer';
import { notification } from '../redux/notification/notification.reducer';
import { universityReducer as university } from '../redux/univeristy/university.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  notification,
  university
});

export default rootReducer;
