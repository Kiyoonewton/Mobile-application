import * as types from '../types';
import axios from 'axios';
import {getToken} from './studentDashBoard';

export const loginUserStart = () => ({
  type: types.LOGIN_USER_START,
});

export const loginUserSuccess = token => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: token,
});

export const loginUserFail = error => ({
  type: types.LOGIN_USER_FAIL,
  payload: error,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());
    axios
      .post('https://afrilearn-backend-01.herokuapp.com/api/v1/auth/login', {
        email,
        password,
      })
      .then(res => {
        // console.log('login response', res.data.data);
        dispatch(loginUserSuccess(res.data.data));
      })
      .catch(err => dispatch(loginUserFail(err.response.data)));
    // .catch((err) => dispatch(loginUserFail(err.res.data.message)))
  };
};
