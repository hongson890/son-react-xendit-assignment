import { combineReducers } from 'redux';

import { users } from '../redux/user/users.reducer';
import { notification } from '../redux/notification/notification.reducer';
import { universityReducer as university } from '../redux/univeristy/university.reducer';

const rootReducer = combineReducers({
  users,
  notification,
  university
});

export default rootReducer;
