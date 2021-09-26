export const HTTP_ERROR_ROUTER = {
  ACCESS_DENIED: '/error-401',
  SERVER_ERROR: '/error-500',
  NOT_FOUND: '/error-404',
  UNAUTHORIZED_ERROR: '/error-401',
  INTERNAL_SERVER_ERROR: '/error-500',
};

export { httpRequest } from './http.core';
export { BASE_URL } from './http.constant';
