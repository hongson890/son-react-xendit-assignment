import {
  CLEAN_LIST,
  SEARCH_UNIVERSITY,
  SEARCH_UNIVERSITY_FAIL,
  SEARCH_UNIVERSITY_SUCCESSFULLY
} from './university.constant';

export const initialState = {
  isLoading: false,
  errorMessage: '',
  universityList: [],
  textInput: ''
};

export const universityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_UNIVERSITY:
      return {
        ...state,
        textInput: action.textInput,
        loading: true,
      };
    case SEARCH_UNIVERSITY_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        universityList: action.universityList
      };
    case SEARCH_UNIVERSITY_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    case CLEAN_LIST:
      return {
        ...state,
        universityList: [],
      };
    default:
      return state;
  }
};
