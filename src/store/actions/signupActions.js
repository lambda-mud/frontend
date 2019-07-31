import axios from 'axios';

// Create A New Account
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const signUp = userInfo => dispatch => {
    console.log(userInfo)
    dispatch({ type: SIGN_UP})
    return axios.post('https://django-mud-backend.herokuapp.com/api/registration/', userInfo)
    .then(res => {
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.token})
        localStorage.setItem('token', res.data.token);
        console.log(res);
    })    .catch(err => {
        dispatch({ type: SIGN_UP_FAILURE, payload: err.message})
    })
}
