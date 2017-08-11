// keys for actiontypes
import axios from 'axios';

export const ROOT_URL = 'https://halendr-api.herokuapp.com/api';
// export const ROOT_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  FETCH_MORNING_QUESTIONS: 'FETCH_MORNING_QUESTIONS',
  FETCH_NIGHT_QUESTIONS: 'FETCH_NIGHT_QUESTIONS',
  FETCH_METRICS: 'FETCH_METRICS',
  FETCH_SLEEP_METRICS: 'FETCH_SLEEP_METRICS',
  FETCH_FOOD_METRICS: 'FETCH_FOOD_METRICS',
  FETCH_MOOD_METRICS: 'FETCH_MOOD_METRICS',
  FETCH_EXERCISE_METRICS: 'FETCH_EXERCISE_METRICS',
  FETCH_WORK_METRICS: 'FETCH_WORK_METRICS',
  AUTH_USER: 'AUTH_USER',
  SAVE_USER: 'SAVE_USER',
  SAVE_NAME: 'SAVE_NAME',
  DEAUTH_USER: 'DEAUTH_USER',
  FETCH_SURVEYS: 'FETCH_SURVEYS',
  TAKEN_SURVEY: 'TAKEN_SURVEY',
  NOT_TAKEN_SURVEY: 'NOT_TAKEN_SURVEY',
  EMAIL_ERROR: 'EMAIL_ERROR',
  EMAIL_APPROVED: 'EMAIL_APPROVED',
  UPDATE_USER: 'UPDATE_USER',
  FETCH_SETTINGS: 'FETCH_SETTINGS',
  FETCH_ALL_EVENTS: 'FETCH_ALL_EVENTS',
};

export function createEvent() {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/events`).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function fetchAllEvents() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/events`).then((response) => {
      console.log(response.data);
      return dispatch({ type: 'FETCH_ALL_EVENTS',
        payload: { events: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function resetSignUpError() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.EMAIL_APPROVED });
  };
}

export function signupUser(useremail, firstName, user, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, user).then((response) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      dispatch({ type: ActionTypes.SAVE_USER, payload: { email: useremail, firstname: firstName, profilepic: user.profilepic } });
      dispatch({ type: ActionTypes.EMAIL_APPROVED });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', useremail);
      localStorage.setItem('firstname', user.firstName);
      history.push('/');
    }).catch((error) => {
      dispatch({ type: ActionTypes.EMAIL_ERROR, payload: { message: error.response.data } });
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


export function signinUser(useremail, user, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, user)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', useremail);
      axios.get(`${ROOT_URL}/signup`, { headers: { authorization: localStorage.getItem('token') } }).then((response1) => {
        localStorage.setItem('firstname', response1.data.firstName);
        localStorage.setItem('profilepic', response1.data.profilepic);
        return (dispatch({ type: ActionTypes.SAVE_NAME, payload: { email: useremail, firstname: response1.data.firstName, profilepic: response1.data.profilepic } }));
      }).catch((error) => {
        console.log(error);
      });
      dispatch({ type: ActionTypes.AUTH_USER });
      dispatch({ type: ActionTypes.EMAIL_APPROVED });
      history.push('/');
    })
    .catch((error) => {
      dispatch({ type: ActionTypes.EMAIL_ERROR, payload: { message: error.response.data } });
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('firstname');
    localStorage.removeItem('profilepic');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

export function fetchQuestions() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/questions`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_QUESTIONS',
        payload: { questions: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function recordMetrics(score, category, morning) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/metrics`, { score, category, morning }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function fetchMorningQuestions() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/questions/morning`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_MORNING_QUESTIONS',
        payload: { questions: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchNightQuestions() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/questions/night`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_NIGHT_QUESTIONS',
        payload: { questions: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function createQuestion(question, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/questions`, question).then((response) => {
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function fetchSurveys() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/surveys`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      dispatch({ type: 'FETCH_SURVEYS',
        payload: { surveys: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function createSurvey(questions, email, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/surveys`, { questions, email }, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      fetchSurveys()(dispatch);
      history.push('/');
    }).catch((err) => {
      console.log(err);
    });
  };
}

export function fetchMetrics() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/metrics`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_METRICS',
        payload: { metrics: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function fetchSleepMetrics() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/metrics/sleep`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_SLEEP_METRICS',
        payload: { sleep: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}


export function fetchFoodMetrics() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/metrics/food`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_FOOD_METRICS',
        payload: { food: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchWorkMetrics() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/metrics/work`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_WORK_METRICS',
        payload: { work: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchMoodMetrics() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/metrics/mood`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_MOOD_METRICS',
        payload: { mood: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchExerciseMetrics() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/metrics/exercise`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      return dispatch({ type: 'FETCH_EXERCISE_METRICS',
        payload: { exercise: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function setSurveyTaken() {
  return (dispatch) => {
    return dispatch({ type: 'TAKEN_SURVEY' });
  };
}

export function setSurveyNotTaken() {
  return (dispatch) => {
    return dispatch({ type: 'NOT_TAKEN_SURVEY' });
  };
}

export function fetchSettings() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/settings`, { headers: { authorization: localStorage.getItem('token') } })
    .then((response) => {
      return dispatch({ type: 'FETCH_SETTINGS', payload: { settings: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updateUser(user) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/update`, user, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      fetchSettings()(dispatch);
      const useremail = user.email;
      axios.get(`${ROOT_URL}/signup`, { headers: { authorization: localStorage.getItem('token') } }).then((response1) => {
        localStorage.setItem('firstname', response1.data.firstName);
        localStorage.setItem('profilepic', response1.data.profilepic);
        return (dispatch({ type: ActionTypes.SAVE_NAME, payload: { email: useremail, firstname: response1.data.firstName, profilepic: response1.data.profilepic } }));
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  };
}
