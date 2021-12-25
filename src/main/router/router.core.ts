type routesType = {
  [route: string]: Function;
};

function initRouter(routes: routesType) {
  return async (path: string, ctx: any) => {
    const routerHandlers = routes[path] || null;
    if (routerHandlers !== null) {
      await routerHandlers(ctx);
    }
  };
}

export function routesInit(routes: routesType) {
  const routeSwitch = initRouter(routes);
  return async (ctx: any) => {
    await routeSwitch(ctx.pathname, ctx);
  };
}
