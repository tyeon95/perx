import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import request from 'utils/request';
import { REPOS, ORGS } from 'utils/api';
import { fetchUserRepos, fetchUserOrgs } from '../saga';
import { fetchUserSuccess } from '../actions';

describe('homeSaga', () => {
  it('test fetchUserRepos', async () => {
    const payload = 'test123';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const generator = cloneableGenerator(fetchUserRepos)({
      payload,
    });

    await expect(generator.next(true).value).toEqual(
      await call(request, REPOS(payload), options),
    );

    const res = [1, 2];
    expect(generator.next(res).value).toEqual(
      await put(fetchUserSuccess({ key: 'repos', data: res })),
    );

    expect(generator.next().done).toEqual(true);
  });

  it('test fetchUserOrgs', async () => {
    const payload = 'test123';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const generator = cloneableGenerator(fetchUserOrgs)({
      payload,
    });

    await expect(generator.next(true).value).toEqual(
      await call(request, ORGS(payload), options),
    );

    const res = [1, 2];
    expect(generator.next(res).value).toEqual(
      await put(fetchUserSuccess({ key: 'orgs', data: res })),
    );

    expect(generator.next().done).toEqual(true);
  });
});
