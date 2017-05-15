// keys for actiontypes
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

// keys for actiontypes
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',
  // AUTH_USER: 'AUTH_USER',
  // DEAUTH_USER: 'DEAUTH_USER',
  // AUTH_ERROR: 'AUTH_ERROR',
};


const ROOT_URL = 'https://cs52lyfetrackr.herokuapp.com/';
const API_KEY = '';


export function fetchQuestions() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_QUESTIONS', payload: { questions: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}
