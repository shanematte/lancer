const TOKEN_NAME = 'SESSION_TOKEN';

export const SessionToken = {
  get: () => localStorage.getItem(TOKEN_NAME),
  set: (token) => localStorage.setItem(TOKEN_NAME, token),
  remove: () => localStorage.removeItem(TOKEN_NAME),
};
