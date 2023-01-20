import * as types from '../types';
import axios from 'axios';

const headers = token => {
  return {headers: {'Content-type': 'application/json'}, token: token};
};
const url = 'https://afrilearn-backend-01.herokuapp.com/api/v1/';

////////////////////////Dashboard - InputChange ////////////////////////

export const InputChange = (name, value) => ({
  type: types.FETCH_INPUT_CHANGE,
  payload: {name, value},
});

////////////////////////Dashboard - Web ////////////////////////
export const fetchWebStart = () => ({
  type: types.FETCH_WEB_START,
});

export const fetchWebSuccess = token => ({
  type: types.FETCH_WEB_SUCCESS,
  payload: token,
});

export const fetchWebError = error => ({
  type: types.FETCH_WEB_FAIL,
  payload: error,
});

export const FetchGetWebInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchWebStart());
    axios({
      method: 'post',
      url: `${url}dashboard/web`,
      headers: headers(token),
      data: {enrolledCourseId: sub_id},
    })
      .then(res => {
        dispatch(fetchWebSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        console.log('subject', err);
      });
  };
};

////////////////////////Dashboard - Challenge ////////////////////////
export const fetchChallengeStart = () => ({
  type: types.FETCH_CHALLENGE_START,
});

export const fetchChallengeSuccess = token => ({
  type: types.FETCH_CHALLENGE_SUCCESS,
  payload: token,
});

export const fetchChallengeError = error => ({
  type: types.FETCH_CHALLENGE_FAIL,
  payload: error,
});

export const FetchGetChallengeInitiate = courseId => {
  return function (dispatch) {
    dispatch(fetchChallengeStart());
    axios({
      method: 'get',
      url: `${url}challenges?courseId=${courseId}`,
      // headers: headers(token),
    })
      .then(res => {
        // console.log('challenge', res.data.data);
        dispatch(fetchChallengeSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        console.log('cha id', courseId);
        console.log('challenge', err);
      });
  };
};

////////////////////////CLASS - MEMBER ////////////////////////
export const fetchClassMemberStart = () => ({
  type: types.FETCH_CLASS_MEMBERSHIP_START,
});

export const fetchClassMemberSuccess = token => ({
  type: types.FETCH_CLASS_MEMBERSHIP_SUCCESS,
  payload: token,
});

export const fetchClassMemberError = error => ({
  type: types.FETCH_CLASS_MEMBERSHIP_FAIL,
  payload: error,
});

export const FetchGetClassMemberInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchClassMemberStart());
    axios({
      method: 'post',
      url: `${url}dashboard/class-membership`,
      headers: headers(token),
      data: {enrolledCourseId: sub_id},
    })
      .then(res => {
        dispatch(fetchClassMemberSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        // console.log('cha id', courseId);
        console.log('classmember', err);
      });
  };
};

////////////////////////Unfinished - Videos////////////////////////
export const fetchUnfinishedvideosStart = () => ({
  type: types.FETCH_UNFINISHED_VIDEOS_START,
});

export const fetchUnfinishedvideosSuccess = token => ({
  type: types.FETCH_UNFINISHED_VIDEOS_SUCCESS,
  payload: token,
});

export const fetchUnfinishedvideosError = error => ({
  type: types.FETCH_UNFINISHED_VIDEOS_FAIL,
  payload: error,
});

export const FetchGetUnfinishedvideosInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchUnfinishedvideosStart());
    axios({
      method: 'get',
      url: `${url}dashboard/unfinishedVideos`,
      headers: headers(token),
      // data: {enrolledCourseId: sub_id},
    })
      .then(res => {
        // console.log(res.data.data);
        dispatch(fetchUnfinishedvideosSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        // console.log('cha id', courseId);
        console.log('Unfinishedvideos', err);
      });
  };
};

////////////////////////Favourite - Videos////////////////////////
export const fetchFavouritevideosStart = () => ({
  type: types.FETCH_FAVOURITE_VIDEOS_START,
});

export const fetchFavouritevideosSuccess = token => ({
  type: types.FETCH_FAVOURITE_VIDEOS_SUCCESS,
  payload: token,
});

export const fetchFavouritevideosError = error => ({
  type: types.FETCH_FAVOURITE_VIDEOS_FAIL,
  payload: error,
});

export const FetchFavouritevideosInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchFavouritevideosStart());
    axios({
      method: 'post',
      url: `${url}dashboard/favourite`,
      headers: headers(token),
      // data: {enrolledCourseId: sub_id},
    })
      .then(res => {
        // console.log(res.data.data);
        dispatch(fetchFavouritevideosSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        // console.log('cha id', courseId);
        console.log('Favouritevideos', err);
      });
  };
};

////////////////////////TopTen - Videos////////////////////////
export const fetchTopTenvideosStart = () => ({
  type: types.FETCH_TOPTEN_VIDEOS_START,
});

export const fetchTopTenvideosSuccess = token => ({
  type: types.FETCH_TOPTEN_VIDEOS_SUCCESS,
  payload: token,
});

export const fetchTopTenvideosError = error => ({
  type: types.FETCH_TOPTEN_VIDEOS_FAIL,
  payload: error,
});

export const FetchTopTenVideosInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchTopTenvideosStart());
    axios({
      method: 'post',
      url: `${url}dashboard/topTen`,
      headers: headers(token),
      data: {enrolledCourseId: sub_id},
    })
      .then(res => {
        // console.log(res.data.data);
        dispatch(fetchTopTenvideosSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        // console.log('cha id', courseId);
        // console.log('Favouritevideos', err);
      });
  };
};

//////////////////////// Recent Activity ///////////////////////
export const fetchRecentActivityStart = () => ({
  type: types.FETCH_RECENT_ACTIVITY_START,
});

export const fetchRecentActivitySuccess = token => ({
  type: types.FETCH_RECENT_ACTIVITY_SUCCESS,
  payload: token,
});

export const fetchRecentActivityError = error => ({
  type: types.FETCH_RECENT_ACTIVITY_FAIL,
  payload: error,
});

export const FetchRecentActivityInitiate = (sub_id, token) => {
  return function (dispatch) {
    dispatch(fetchRecentActivityStart());
    axios({
      method: 'post',
      url: `${url}dashboard/recentActivities`,
      headers: headers(token),
      data: {enrolledCourseId: sub_id},
    })
      .then(res => {
        // console.log(res.data.data);
        dispatch(fetchRecentActivitySuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        console.log('recentActivity', err);
        // console.log('Favouritevideos', err);
      });
  };
};

//////////////////////// Recent Activity ///////////////////////
export const fetchSubjectAndRelatedLessonsStart = () => ({
  type: types.FETCH_SUBJECT_RELATED_LESSONS_START,
});

export const fetchSubjectAndRelatedLessonsSuccess = token => ({
  type: types.FETCH_SUBJECT_RELATED_LESSONS_SUCCESS,
  payload: token,
});

export const fetchSubjectAndRelatedLessonsError = error => ({
  type: types.FETCH_SUBJECT_RELATED_LESSONS_FAIL,
  payload: error,
});

export const GetSubjectAndRelatedLessons = (courseId, subjectId) => {
  return function (dispatch) {
    dispatch(fetchSubjectAndRelatedLessonsStart());
    axios({
      method: 'post',
      url: `${url}lessons/${courseId}/${subjectId}/subject-lessons`,
    })
      .then(res => {
        // console.log(res.data.data);
        dispatch(fetchSubjectAndRelatedLessonsSuccess(res.data.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        console.log('SubjectAndRelatedLessons', err);
        // console.log('Favouritevideos', err);
      });
  };
};

//////////////////////// PAST- QUESTION ///////////////////////
export const fetchPastQuestionSubjectsStart = () => ({
  type: types.FETCH_PASTQUESTION_SUBJECT_START,
});

export const fetchPastQuestionSubjectsSuccess = token => ({
  type: types.FETCH_PASTQUESTION_SUBJECT_SUCCESS,
  payload: token,
});

export const fetchPastQuestionSubjectsError = error => ({
  type: types.FETCH_PASTQUESTION_SUBJECT_FAIL,
  payload: error,
});

export const fetchPastQuestionSubjectsInitiate = id => {
  return function (dispatch) {
    dispatch(fetchPastQuestionSubjectsStart());
    axios({
      method: 'get',
      url: `https://api.exambly.com/adminpanel/v2/getMySubjects/${id}`,
      headers: {
        'Content-type': 'application/json',
        authorization:
          'F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv',
      },
    })
      .then(res => {
        // console.log(res.data);
        dispatch(fetchPastQuestionSubjectsSuccess(res.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        console.log('pastQuestion', err);
        // console.log('Favouritevideos', err);
      });
  };
};

//////////////////////// PAST- QUESTION ///////////////////////
export const fetchPastQuestionStart = () => ({
  type: types.FETCH_PASTQUESTION_START,
});

export const fetchPastQuestionSuccess = token => ({
  type: types.FETCH_PASTQUESTION_SUCCESS,
  payload: token,
});

export const fetchPastQuestionError = error => ({
  type: types.FETCH_PASTQUESTION_FAIL,
  payload: error,
});

export const fetchPastQuestionInitiate = id => {
  return function (dispatch) {
    dispatch(fetchPastQuestionStart());
    axios({
      method: 'get',
      url: `https://api.exambly.com/adminpanel/v2/getQuestions/${id}`,
      headers: {
        'Content-type': 'application/json',
        authorization:
          'F0c7ljTmi25e7LMIF0Wz01lZlkHX9b57DFTqUHFyWeVOlKAsKR0E5JdBOvdunpqv',
      },
    })
      .then(res => {
        // console.log(res.data);
        dispatch(fetchPastQuestionSuccess(res.data));
      })
      .catch(err => {
        // dispatch(fetchWebError(err));
        console.log('pastQuestion', err);
        // console.log('Favouritevideos', err);
      });
  };
};
