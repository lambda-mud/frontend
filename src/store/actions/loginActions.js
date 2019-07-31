import axios from 'axios';

// Log In
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type: LOG_IN })
    return axios.post('https://django-mud-backend.herokuapp.com/api/login/', userInfo)
    .then(res => {
        console.log(res.data)
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data.key })
        localStorage.setItem('token', `Token ${res.data.key}`);
        localStorage.setItem('location', res.data.title);
    })
    .catch(err => {
        dispatch({ type: LOG_IN_FAILURE, payload: err.message })
    })
}

// Log Out
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem('token')
    dispatch({ type: LOGOUT_SUCCESS })
    window.location.reload()
}

// Is This User Signed In?

export const SIGNED_IN = "SIGNED_IN";
export const SIGNED_OUT = "SIGNED_OUT";

export const checkSignIn = () => {
    if (localStorage.getItem('token')) {
        return {type: SIGNED_IN }
    }
    return {type: SIGNED_OUT}
}
