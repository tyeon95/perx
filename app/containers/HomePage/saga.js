import { all, takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USER } from './constants';
import { fetchUserSuccess, fetchUserFailed } from './actions';
import { REPOS, ORGS } from '../../utils/api';
import request from '../../utils/request';

export function* fetchUserRepos(action) {
  try {
    const { payload } = action;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = yield call(request, REPOS(payload), options);
    yield put(fetchUserSuccess({ key: 'repos', data: res }));
  } catch (err) {
    yield put(fetchUserFailed({ key: 'repos', data: err }));
  }
}

export function* fetchUserOrgs(action) {
  try {
    const { payload } = action;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = yield call(request, ORGS(payload), options);
    yield put(fetchUserSuccess({ key: 'orgs', data: res }));
  } catch (err) {
    yield put(fetchUserFailed({ key: 'orgs', data: err }));
  }
}

/* istanbul ignore next */
export default function* homePageSaga() {
  yield all([takeLatest(FETCH_USER, fetchUserRepos)]);
  yield all([takeLatest(FETCH_USER, fetchUserOrgs)]);
}
