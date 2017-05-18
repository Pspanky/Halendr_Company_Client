
// keys for actiontypes
import axios from 'axios';

const ROOT_URL = 'https://cs52lyfetrackr.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '';


// keys for actiontypes
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  // AUTH_USER: 'AUTH_USER',
  // DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signupUser(user, history) {
  console.log(user);
  return (dispatch) => {
    console.log('Trying to signup');
    console.log(`${ROOT_URL}`);
    axios.post(`${ROOT_URL}/signup`, user).then((response) => {
      console.log('signed up!!');
      history.push('/');
    }).catch((error) => {
      console.log('User is hereeeeeee!');
      console.log(error);
    });
  };
}

export function signinUser({ email, password }, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    })
    .catch((error) => {
      dispatch(authError(error));
    });
  };
}

export function fetchQuestions() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/questions${API_KEY}`).then((response) => {
      console.log(response.data);
      return dispatch({ type: 'FETCH_QUESTIONS',
        payload: { questions: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function recordMetrics(answers, category) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/answers${API_KEY}`, { answers, category }).then((response) => {
      console.log('answers recorded');
    }).catch((err) => {
      console.log(err);
    });
  };
}
