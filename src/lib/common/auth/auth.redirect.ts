import { redirect } from '../../../main/navigation/navigation.core';
import { AUTH_STORE_NAME } from './auth.constant';
import { USER_ROLE } from './auth.type';

export const authRedirectLogged = (ctx: any, pathToRedirect: string) => {
  const { res, token = null } = ctx;

  if (token) {
    if (res) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};

export const authRedirectPrivated = (ctx: any, pathToRedirect: string) => {
  const { res, token = null } = ctx;

  if (!token) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};

export const authRedirectForNonAdminUser = (
  ctx: any,
  pathToRedirect: string,
) => {
  const { res, store } = ctx;
  const user = store.getState()[AUTH_STORE_NAME].user;

  if (user?.role !== USER_ROLE.ADMIN) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};
