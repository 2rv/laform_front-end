import { redirect } from '../../../main/navigation';

export const codeVerificationRedirect = (ctx: any, pathToRedirect: any) => {
  const { res, query } = ctx;

  if (!query.code) {
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
