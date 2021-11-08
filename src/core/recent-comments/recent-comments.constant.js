export const RECENT_COMMENTS_ROUTE_PATH = '/recent-comments';
export const RECENT_COMMENTS_STORE_NAME = 'RECENT_COMMENTS';
export const RECENT_COMMENTS_API = {
  RECENT_COMMENTS_UPLOAD: {
    ENDPOINT: (page = 1) => `/comment/get/for-admin?page=${page}`,
    TYPE: 'GET',
  },
};
