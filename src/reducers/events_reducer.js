import { ActionTypes } from '../actions';

const initialState = {
  events: [],
};

const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_EVENTS:
      return Object.assign({}, state, {
        events: action.payload.events,
      });
    // case ActionTypes.TAKEN_SURVEY:
    //   return Object.assign({}, state, {
    //     taken: true,
    //   });
    //
    // case ActionTypes.NOT_TAKEN_SURVEY:
    //   return Object.assign({}, state, {
    //     taken: false,
    //   });
    default:
      return state;
  }
};

export default EventsReducer;
