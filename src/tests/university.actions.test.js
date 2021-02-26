import { universityActions } from '../redux/univeristy/university.actions';
import {
  CLEAN_LIST,
  SEARCH_UNIVERSITY,
  SEARCH_UNIVERSITY_FAIL,
  SEARCH_UNIVERSITY_SUCCESSFULLY
} from '../redux/univeristy/university.constant';

describe('universityActions', () => {
  it('universityActions creates SEARCH_UNIVERSITY action', () => {
    expect(
      universityActions.requestSearchUniversity('testInput')
    ).toEqual({
      type: SEARCH_UNIVERSITY,
      textInput: 'testInput',
    });
  });
  it('universityActions creates SEARCH_UNIVERSITY_SUCCESSFULLY action', () => {
    expect(
      universityActions.searchUniversitySuccessfully([])
    ).toEqual({
      type: SEARCH_UNIVERSITY_SUCCESSFULLY,
      universityList: []
    });
  });
  it('universityActions creates SEARCH_UNIVERSITY_FAIL action', () => {
    expect(
      universityActions.searchUniversityFail({ message: 'errorMessage' })
    ).toEqual({
      type: SEARCH_UNIVERSITY_FAIL,
      error: { message: 'errorMessage' }
    });
  });
  it('universityActions creates CLEAN_LIST action', () => {
    expect(
      universityActions.cleanList()
    ).toEqual({
      type: CLEAN_LIST
    });
  });
});
