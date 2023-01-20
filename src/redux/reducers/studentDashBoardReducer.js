import * as types from '../types';

const initialState = {
  currentEnrolledCourseId: '',
  currentCourseId: '',
  classNoteData: '',

  showAlert1: false,
  showCancelButton: true,
  showConfirmButton: false,
  alertTitle: '',
  alertMessage: '',
  cancelText: '',
  confirmText: '',

  subjectData: [],
  subjectLoading: false,
  subjectError: '',

  challengeData: {},
  challengeLoading: false,
  challengeError: '',

  classMembershipData: {},
  classMembershipLoading: false,
  classMembershipError: '',

  unfinishedVideosData: {},
  unfinishedVideosLoading: false,
  unfinishedVideosError: '',

  favouriteVideosData: {},
  favouriteVideosLoading: false,
  favouriteVideosError: '',

  topTenVideosData: {},
  topTenVideosLoading: false,
  topTenVideosError: '',

  recentActivityData: {},
  recentActivityLoading: false,
  recentActivityError: '',

  subjectAndRelatedLessonsData: {},
  subjectAndRelatedLessonsLoading: false,
  subjectAndRelatedLessonsError: '',

  pastQuestionSubData: {},
  pastQuestionSubLoading: false,
  pastQuestionSubError: '',

  pastQuestionData: {},
  pastQuestionLoading: false,
  pastQuestionError: '',
};

const studentDashboardReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    /* ---------------INPUT---------------*/
    case types.FETCH_INPUT_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    /* ---------------SUBJECT---------------*/
    case types.FETCH_WEB_START:
      return {
        ...state,
        subjectLoading: true,
      };
    case types.FETCH_WEB_SUCCESS:
      return {
        ...state,
        subjectData: payload,
        subjectLoading: false,
      };
    case types.FETCH_WEB_FAIL:
      return {
        ...state,
        subjectError: payload,
        subjectLoading: false,
      };

    /* ---------------CHALLENGE---------------*/
    case types.FETCH_CHALLENGE_START:
      return {
        ...state,
        challengeLoading: true,
      };
    case types.FETCH_CHALLENGE_SUCCESS:
      return {
        ...state,
        challengeData: payload,
        challengeLoading: false,
      };
    case types.FETCH_CHALLENGE_FAIL:
      return {
        ...state,
        challengeError: payload,
        challengeLoading: false,
      };

    /* ---------------CLASS-MEMBERSHIP---------------*/
    case types.FETCH_CLASS_MEMBERSHIP_START:
      return {
        ...state,
        classMembershipLoading: true,
      };
    case types.FETCH_CLASS_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        classMembershipData: payload,
        classMembershipLoading: false,
      };
    case types.FETCH_CLASS_MEMBERSHIP_FAIL:
      return {
        ...state,
        classMembershipError: payload,
        classMembershipLoading: false,
      };

    /* ---------------UNFINISHED - VIDEOS---------------*/
    case types.FETCH_UNFINISHED_VIDEOS_START:
      return {
        ...state,
        unfinishedVideosLoading: true,
      };
    case types.FETCH_UNFINISHED_VIDEOS_SUCCESS:
      return {
        ...state,
        unfinishedVideosData: payload,
        unfinishedVideosLoading: false,
      };
    case types.FETCH_UNFINISHED_VIDEOS_FAIL:
      return {
        ...state,
        unfinishedVideosError: payload,
        unfinishedVideosLoading: false,
      };

    /* ---------------FAVOURITE - VIDEOS---------------*/
    case types.FETCH_FAVOURITE_VIDEOS_START:
      return {
        ...state,
        favouriteVideosLoading: true,
      };
    case types.FETCH_FAVOURITE_VIDEOS_SUCCESS:
      return {
        ...state,
        favouriteVideosData: payload,
        favouriteVideosLoading: false,
      };
    case types.FETCH_FAVOURITE_VIDEOS_FAIL:
      return {
        ...state,
        favouriteVideosError: payload,
        favouriteVideosLoading: false,
      };

    /* ---------------TOPTEN - VIDEOS---------------*/
    case types.FETCH_TOPTEN_VIDEOS_START:
      return {
        ...state,
        topTenVideosLoading: true,
      };
    case types.FETCH_TOPTEN_VIDEOS_SUCCESS:
      return {
        ...state,
        topTenVideosData: payload,
        topTenVideosLoading: false,
      };
    case types.FETCH_TOPTEN_VIDEOS_FAIL:
      return {
        ...state,
        topTenVideosError: payload,
        topTenVideosLoading: false,
      };

    /* ---------------RECENT - ACTIVITY---------------*/
    case types.FETCH_RECENT_ACTIVITY_START:
      return {
        ...state,
        recentActivityLoading: true,
      };
    case types.FETCH_RECENT_ACTIVITY_SUCCESS:
      return {
        ...state,
        recentActivityData: payload,
        recentActivityLoading: false,
      };
    case types.FETCH_RECENT_ACTIVITY_FAIL:
      return {
        ...state,
        recentActivityError: payload,
        recentActivityLoading: false,
      };

    /* ---------------SUBJECT-RELATED-LESSONS---------------*/
    case types.FETCH_SUBJECT_RELATED_LESSONS_START:
      return {
        ...state,
        subjectAndRelatedLessonsLoading: true,
      };
    case types.FETCH_SUBJECT_RELATED_LESSONS_SUCCESS:
      return {
        ...state,
        subjectAndRelatedLessonsData: payload,
        subjectAndRelatedLessonsLoading: false,
      };
    case types.FETCH_SUBJECT_RELATED_LESSONS_FAIL:
      return {
        ...state,
        subjectAndRelatedLessonsError: payload,
        subjectAndRelatedLessonsLoading: false,
      };

    /* ---------------PAST - QUESTIONS---------------*/
    case types.FETCH_PASTQUESTION_SUBJECT_START:
      return {
        ...state,
        pastQuestionSubLoading: true,
      };
    case types.FETCH_PASTQUESTION_SUBJECT_SUCCESS:
      return {
        ...state,
        pastQuestionSubData: payload,
        pastQuestionSubLoading: false,
      };
    case types.FETCH_PASTQUESTION_SUBJECT_FAIL:
      return {
        ...state,
        pastQuestionSubError: payload,
        pastQuestionSubLoading: false,
      };

    /* ---------------PAST - QUESTIONS---------------*/
    case types.FETCH_PASTQUESTION_START:
      return {
        ...state,
        pastQuestionLoading: true,
      };
    case types.FETCH_PASTQUESTION_SUCCESS:
      return {
        ...state,
        pastQuestionData: payload,
        pastQuestionLoading: false,
      };
    case types.FETCH_PASTQUESTION_FAIL:
      return {
        ...state,
        pastQuestionError: payload,
        pastQuestionLoading: false,
      };

    default:
      return state;
  }
};

export default studentDashboardReducer;
