import { PageWrapper } from '../../lib/common/page-wrapper';
import { ErrorContainer } from './error.container';

export function ErrorPage(props) {
  const { errorStatus } = props;

  return (
    <PageWrapper>
      <ErrorContainer errorStatus={errorStatus} />
    </PageWrapper>
  );
}

export const Error401Page = () => <ErrorPage errorStatus={401} />;
export const Error500Page = () => <ErrorPage errorStatus={500} />;
export const Error404Page = () => <ErrorPage errorStatus={404} />;
export const ErrorNotPaidPage = () => <ErrorPage errorStatus={'NOT_PAID'} />;
export const SuccessPaidPage = () => <ErrorPage errorStatus={'SUCCESS_PAID'} />;
