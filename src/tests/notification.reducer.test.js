import { universityMock } from './mock/university.mock';
import { initialState, universityReducer } from '../redux/univeristy/university.reducer';
import { universityActions } from '../redux/univeristy/university.actions';

const users = universityMock;

describe('universityReducers', () => {
  it('handles SEARCH_UNIVERSITY action', () => {
    const expectedState = {
      ...initialState,
      textInput: 'sontest',
      loading: true,
    };

    const actualState = universityReducer(
      initialState,
      universityActions.requestSearchUniversity('sontest'),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_UNIVERSITY_SUCCESS action', () => {
    const expectedState = {
      ...initialState,
      loading: false,
      universityList: universityMock
    };

    const actualState = universityReducer(
      initialState,
      universityActions.searchUniversitySuccessfully(universityMock),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles SEARCH_UNIVERSITY_FAIL action', () => {
    const expectedState = {
      ...initialState,
      loading: false,
      errorMessage: { error: 'errorMessage' }
    };

    const actualState = universityReducer(
      initialState,
      universityActions.searchUniversityFail({ error: 'errorMessage' }),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles CLEAN_LIST action', () => {
    const expectedState = {
      ...initialState,
      universityList: []
    };

    const actualState = universityReducer(
      initialState,
      universityActions.cleanList(),
    );

    expect(expectedState).toEqual(actualState);
  });
});
