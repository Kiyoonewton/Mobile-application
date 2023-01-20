import {combineReducers} from 'redux';
import authReducer from './authReducers';
import studentDashboardReducer from './studentDashBoardReducer';

export default combineReducers({
  auth: authReducer,
  studentDashboard: studentDashboardReducer,
});
