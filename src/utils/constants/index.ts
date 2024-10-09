export const MAX_WEIGHT = 100;

export * from './db';
export * from './localStorageKeys';

export const API_URLS = {
  users_service: {
    loginWithCredentials: '/login',
    loginWithCookie: '/login-with-cookie',
    loginWithSaml: '/login-with-saml',
    logout: '/logout',
    users: '/users',
  },
};

export const BASE_URL = '/learn-russian';
