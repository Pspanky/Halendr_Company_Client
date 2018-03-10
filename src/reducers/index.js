import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import QReducer from './q-reducer';
import MetricsReducer from './metrics-reducer';
import EventsReducer from './events_reducer';

const rootReducer = combineReducers({
  questions: QReducer,
  auth: AuthReducer,
  metrics: MetricsReducer,
  events: EventsReducer,
});

export default rootReducer;
