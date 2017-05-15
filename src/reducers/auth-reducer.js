import { ActionTypes } from '../actions';

// taken from lab 5 pt 2

const defaultState = {
  authenticated: false,
};

const AuthReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return Object.assign({}, state, {
        authenticated: true,
      });

    case ActionTypes.DEAUTH_USER:
      console.log('Post data');
      return Object.assign({}, state, {
        authenticated: false,
      });

    case ActionTypes.AUTH_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
      });

    default:
      console.log('state');
      console.log(state);
      return state;
      // return null;
  }
};


export default AuthReducer;
