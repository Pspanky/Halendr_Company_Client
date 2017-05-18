
import { ActionTypes } from '../actions';


const initialState = {
  metrics: [],
};
const MetricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_METRICS:
      return Object.assign({}, state, {
        metrics: action.payload.metrics,
      });

    default:
      return state;
  }
};


export default MetricsReducer;
