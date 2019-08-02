import axios from 'axios';

// Create A New Account
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const signUp = userInfo => dispatch => {
    dispatch({ type: SIGN_UP})
    return axios.post('https://django-mud-backend.herokuapp.com/api/registration/', userInfo)
    .then(res => {
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.key})
        localStorage.setItem('token', `Token ${res.data.key}`);
    }).catch(err => {
        if (err.response.data.password1) {
            dispatch({ type: SIGN_UP_FAILURE, payload: err.response.data.password1[0]})
        } 

        if (err.response.data.username) {
            dispatch({ type: SIGN_UP_FAILURE, payload: err.response.data.username[0]})
        }
    })
}
