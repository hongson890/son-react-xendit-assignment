import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { notification } from './notification.reducer';
import { universityReducer as university } from '../redux/univeristy/university.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  notification,
  university
});

export default rootReducer;
