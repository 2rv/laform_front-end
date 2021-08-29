export { SIGNUP_ROUTE_PATH } from '../../lib/common/signup/signup.constant';

export const SLIDER_STORE_NAME = 'SLIDER';

export const SLIDER_API = {
  LOAD_SLIDES: {
    ENDPOINT: (currentLang) => `/slider/get?lang=${currentLang}`,
    METHOD: 'GET',
  },
};
