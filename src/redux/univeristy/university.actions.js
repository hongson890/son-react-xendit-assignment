import {
  CLEAN_LIST,
  SEARCH_UNIVERSITY,
  SEARCH_UNIVERSITY_FAIL,
  SEARCH_UNIVERSITY_SUCCESSFULLY
} from './university.constant';
import { universityService } from '../../services/university.service';

export const universityActions = {
  searchUniversity,
  requestSearchUniversity,
  searchUniversitySuccessfully,
  searchUniversityFail,
  cleanList
};

function searchUniversity(textInput) {
  return async (dispatch) => {
    dispatch(requestSearchUniversity(textInput));
    try {
      let result = await universityService.searchUniversity(textInput);
      dispatch(searchUniversitySuccessfully(result.data));
    } catch (e) {
      dispatch(searchUniversityFail(e));
    }
  };
}

function requestSearchUniversity(textInput) {
  return { type: SEARCH_UNIVERSITY, textInput };
}

function searchUniversitySuccessfully(universityList) {
  return {
    type: SEARCH_UNIVERSITY_SUCCESSFULLY,
    universityList
  };
}

function searchUniversityFail(error) {
  return {
    type: SEARCH_UNIVERSITY_FAIL,
    error
  };
}

function cleanList() {
  return { type: CLEAN_LIST };
}
