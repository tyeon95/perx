import AppReducer, { initialState } from '../reducer';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from '../constants';

describe('AppReducer', () => {
  it('returns the initial state', () => {
    expect(AppReducer(undefined, {})).toEqual({ ...initialState });
  });

  it('FETCH_USER', () => {
    expect(
      AppReducer(undefined, {
        type: FETCH_USER,
      }),
    ).toEqual({ ...initialState, isFetching: { repos: true, orgs: true } });
  });

  it('FETCH_USER_SUCCESS', () => {
    expect(
      AppReducer(undefined, {
        type: FETCH_USER_SUCCESS,
        payload: { key: 'repos', data: [] },
      }),
    ).toEqual({
      ...initialState,
      data: { ...initialState.data, repos: [] },
    });
  });

  it('FETCH_USER_FAILED', () => {
    expect(
      AppReducer(undefined, {
        type: FETCH_USER_FAILED,
        payload: { key: 'repos', data: '404' },
      }),
    ).toEqual({
      ...initialState,
      error: { ...initialState.error, repos: '404' },
    });
  });
});
