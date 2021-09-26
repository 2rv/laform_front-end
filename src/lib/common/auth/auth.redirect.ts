import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from 'src/core/auth-verificate-email';
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

export const authConfirmedEmail = (ctx: any) => {
  const { res } = ctx;
  const user = ctx.store.getState()[AUTH_STORE_NAME].user;
  if (user && !user?.emailConfirmed) {
    if (res) {
      res.writeHead(301, {
        Location: AUTH_VERIFICATE_EMAIL_ROUTE_PATH,
      });
      res.end();
    } else {
      redirect(AUTH_VERIFICATE_EMAIL_ROUTE_PATH);
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
  const user = ctx.store.getState()[AUTH_STORE_NAME].user;

  if (user && user?.role !== USER_ROLE.ADMIN) {
    redirect(pathToRedirect);
  }
};

export const checkQueryIdRedirect = (
  ctx: any,
  pathToRedirect: any,
  queryName: string,
) => {
  const { res, query } = ctx;

  if (!query?.[queryName]) {
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
