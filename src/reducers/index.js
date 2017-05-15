import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import QReducer from './q-reducer';

const rootReducer = combineReducers({
  questions: QReducer,
  auth: AuthReducer,
});

export default rootReducer;
