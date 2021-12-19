import { PageWrapper } from 'src/lib/common/page-wrapper';
import { ErrorPageProps, ERROR_PAGE_CONFIG } from './error.constant';
import { ErrorComponent } from './error.component';

export function ErrorPage(props: ErrorPageProps) {
  const { errorStatus } = props;

  return (
    <PageWrapper>
      <ErrorComponent config={ERROR_PAGE_CONFIG[errorStatus]} />
    </PageWrapper>
  );
}

export const Error401Page = () => <ErrorPage errorStatus={401} />;
export const Error500Page = () => <ErrorPage errorStatus={500} />;
export const Error404Page = () => <ErrorPage errorStatus={404} />;
export const ErrorNotPaidPage = () => <ErrorPage errorStatus={'NOT_PAID'} />;
export const SuccessPaidPage = () => <ErrorPage errorStatus={'SUCCESS_PAID'} />;
