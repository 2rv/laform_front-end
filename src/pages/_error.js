import { ErrorPage } from '../core/error';

function Error({ statusCode }) {
  return <ErrorPage errorStatus={statusCode} />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
