
import { ActionTypes } from '../actions';


const initialState = {
  questions: [],
};
const QReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload.questions,
      });

    default:
      return state;
  }
};


export default QReducer;
