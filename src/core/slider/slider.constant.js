export { SIGNUP_ROUTE_PATH } from '../../lib/common/signup/signup.constant';

export const SLIDER_STORE_NAME = 'SLIDER';

export const SLIDER_API = {
  LOAD_SLIDES: {
    ENDPOINT: (lang) => {
      ''.concat(`?lang=${lang}`);
    },
    METHOD: 'GET',
  },
};
