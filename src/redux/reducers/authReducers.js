import * as types from '../types';

const initialState = {
  user: [],
  error: '',
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.LOGIN_USER_START:
      return {
        ...state,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
