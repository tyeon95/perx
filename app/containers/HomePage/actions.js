/*
 *
 * HomePage actions
 *
 */
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './constants';

/**
 * fetchUser
 *
 * @return {object} An action object with a type of FETCH_USER
 */
export function fetchUser(payload) {
  return {
    type: FETCH_USER,
    payload,
  };
}

/**
 * fetchUserSuccess
 *
 * @return {object} An action object with a type of FETCH_USER_SUCCESS
 */
export function fetchUserSuccess(payload) {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
}

/**
 * fetchUserFailed
 *
 * @return {object} An action object with a type of FETCH_USER_FAILED
 */
export function fetchUserFailed(payload) {
  return {
    type: FETCH_USER_FAILED,
    payload,
  };
}
