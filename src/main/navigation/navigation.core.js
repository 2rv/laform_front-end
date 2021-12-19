import NextjsRouter from 'next/router';

export const router = NextjsRouter;

export const redirect = (pathname, config = {}) => {
  const {
    local = true,
    query,
    as = pathname,
    params,
    scrollParams,
    shallow,
  } = config;

  if (params) {
    return router
      .push(pathname(), pathname(params), {
        shallow,
        query,
      })
      .then(() => scrollTo(scrollParams));
  }

  if (local) {
    return router
      .push({ pathname, as, query, shallow })
      .then(() => scrollTo(scrollParams));
  }

  window.location.href = pathname;
};

export const scrollTo = (scrollParams = {}) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
    ...scrollParams,
  });
};
export const setLinkRedirect = (path, confirg) => (e) => {
  e.preventDefault();
  redirect(path, confirg);
};
export const getQuery = (id) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const data = router.query[id];

  if (!data) return null;
  if (data === 'true') return true;
  if (data === 'false') return false;

  return data;
};
