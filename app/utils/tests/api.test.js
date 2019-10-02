import { REPOS, ORGS } from '../api';

describe('REPOS', () => {
  it('should return string with user args', () => {
    const user = 'test123';
    const res = REPOS(user);
    expect(res).toBe(`/users/${user}/repos`);
  });
});

describe('ORGS', () => {
  it('should return string with user args', () => {
    const user = 'test123';
    const res = ORGS(user);
    expect(res).toBe(`/users/${user}/orgs`);
  });
});
