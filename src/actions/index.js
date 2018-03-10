// keys for actiontypes
import axios from 'axios';

// export const ROOT_URL = 'https://halendr-api.herokuapp.com/api';
export const ROOT_URL = 'http://localhost:9090/api/candidates';

// keys for actiontypes
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
};

export function sendEmail(email) {
  console.log('got em');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/`, email).then((response) => {
      console.log('email was sent');
    }).catch((error) => {
      console.log(error);
    });
  };
}
