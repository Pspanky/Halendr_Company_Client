import axios from 'axios';

// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://bloggrmahnoor.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';


// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};


export function fetchPosts() {
  console.log('fetching');
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts`).then((response) => {
      return dispatch({ type: 'FETCH_POSTS',
        payload: { posts: response.data } });
    }).catch((error) => {
      console.log(error);
      console.log('Error');
    });
  };
}


export function fetchPost(id) {
  console.log('TRYING TO FETCH POST');
  console.log('id');
  console.log(id);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}`).then((response) => {
      console.log('response data');
      console.log(response.data);
      return dispatch({ type: 'FETCH_POST',
        payload: { post: response.data } });
    }).catch((error) => {
      console.log(error);
      console.log('Error');
    });
  };
}

// axios.post(`${ROOT_URL}/posts`, post)
export function createPost(post, history) {
  console.log('Creating new post');
  console.log(post);
  return (dispatch) => {
    console.log('In dispatch');
    console.log(localStorage.getItem('token'));
    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('Posted!!!!');
      history.push('/');
    }).catch((error) => {
      console.log('Not signed in');
      console.log(error);
      console.log('Error');
    });
  };
}


export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}`, post, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('Updated!!!!');
    }).catch((error) => {
      console.log(error);
      console.log('Error');
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    console.log('In dispatch');
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then((response) => {
      console.log('deleted');
      history.push('/');
    }).catch((error) => {
      console.log(error);
      console.log('Error');
    });
  };
}


// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


export function signinUser(user, history) {
  console.log(user);
  return (dispatch) => {
    console.log('Trying to sign in');
    axios.post(`${ROOT_URL}/signin`, user).then((response) => {
      console.log('signed in!!');
      localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTH_USER });
      history.push('/');
    }).catch((error) => {
      console.log(error);
      console.log('Error');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser(user, history) {
  console.log(user);
  return (dispatch) => {
    console.log('Trying to signup');
    console.log(`${ROOT_URL}`);
    axios.post(`${ROOT_URL}/signup`, user).then((response) => {
      console.log('signed up!!');
      localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTH_USER });
      history.push('/');
    }).catch((error) => {
      console.log('User is hereeeeeee!');
      console.log(error);
      console.log('Error');
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
