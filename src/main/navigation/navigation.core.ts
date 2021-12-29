import NextjsRouter from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

export const router = NextjsRouter;

type ConfigType = {
  local?: boolean;
  query?: string | null | ParsedUrlQueryInput | undefined;
  params?: object;
  scrollParams?: scrollToParams;
};
type PathNameType = string | ((params?: any) => string) | undefined;

export const redirect = (pathname: PathNameType, config: ConfigType = {}) => {
  const { local = true, query, params, scrollParams } = config;
  if (params && typeof pathname === 'function') {
    return router
      .push(pathname(), pathname(params))
      .then(() => scrollTo(scrollParams));
  }
  if (local && typeof pathname === 'string') {
    return router.push({ pathname, query }).then(() => scrollTo(scrollParams));
  }
  if (typeof pathname === 'string') {
    window.location.href = pathname;
  }
  if (typeof pathname === 'function') {
    window.location.href = pathname();
  }
};
export const setLinkRedirect =
  (path?: PathNameType, config?: ConfigType) => (e: any) => {
    e.preventDefault();
    redirect(path, config);
  };
export const getQuery = (id: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  return router.query[id];
};

type scrollToParams = {
  top?: number;
  left?: number;
  behavior?: ScrollBehavior;
};
export const scrollTo = (scrollParams: scrollToParams = {}) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
    ...scrollParams,
  });
};

// (id: string) => {
//   if (typeof window === 'undefined') {
//     return null;
//   }

//   const data = router.query[id];

//   if (!data) return null;
//   if (data === 'true') return true;
//   if (data === 'false') return false;

//   return data;
// };
