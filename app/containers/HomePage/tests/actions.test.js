import { fetchUser, fetchUserSuccess, fetchUserFailed } from '../actions';

import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from '../constants';

describe('Action creators', () => {
  it('Test for fetchUser', () => {
    const payload = 'test123';
    const expectedPayload = {
      type: FETCH_USER,
      payload,
    };

    expect(fetchUser(payload)).toEqual(expectedPayload);
  });

  it('Test for fetchUserSuccess', () => {
    const payload = [
      {
        id: 1,
        name: 'asdm',
        url: 'github.com',
      },
    ];
    const expectedPayload = {
      type: FETCH_USER_SUCCESS,
      payload,
    };

    expect(fetchUserSuccess(payload)).toEqual(expectedPayload);
  });

  it('Test for fetchUserFailed', () => {
    const expectedPayload = {
      type: FETCH_USER_FAILED,
    };

    expect(fetchUserFailed()).toEqual(expectedPayload);
  });
});
