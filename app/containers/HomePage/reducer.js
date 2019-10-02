/*
 *
 * HomePage reducer
 *
 */

import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './constants';

export const initialState = {
  data: { repos: [], orgs: [] },
  isFetching: { repos: false, orgs: false },
  error: { repos: null, orgs: null },
};

function homePageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        error: initialState.error,
        isFetching: { repos: true, orgs: true },
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: { ...state.data, [payload.key]: payload.data },
        error: { ...state.error, [payload.key]: null },
        isFetching: { ...state.isFetching, [payload.key]: false },
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        data: { ...state.data, [payload.key]: [] },
        error: { ...state.error, [payload.key]: payload.data },
        isFetching: { ...state.isFetching, [payload.key]: false },
      };
    default:
      return state;
  }
}

export default homePageReducer;
