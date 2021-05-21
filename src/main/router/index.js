import { signupRouter, SIGNUP_ROUTE_PATH } from '../../core/signup';
import { loginRouter, LOGIN_ROUTE_PATH } from '../../core/login';

import { routesInit } from './router.core';

export const routes = {
  [SIGNUP_ROUTE_PATH]: signupRouter,
  [LOGIN_ROUTE_PATH]: loginRouter,
};

export const Router = routesInit(routes);
