import { homeRouter, HOME_ROUTE_PATH } from '../../core/home';
import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';

import { routesInit } from './router.core';

export const routes = {
  [HOME_ROUTE_PATH]: homeRouter,
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
};

export const Router = routesInit(routes);
