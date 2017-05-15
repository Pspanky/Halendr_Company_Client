
// keys for actiontypes
import axios from 'axios';

const ROOT_URL = 'https://cs52lyfetrackr.herokuapp.com/api';
const API_KEY = '';


// keys for actiontypes
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  // AUTH_USER: 'AUTH_USER',
  // DEAUTH_USER: 'DEAUTH_USER',
  // AUTH_ERROR: 'AUTH_ERROR',
};


export function fetchQuestions() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/questions${API_KEY}`).then((response) => {
      return dispatch({ type: 'FETCH_QUESTIONS',
        payload: { questions: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}
