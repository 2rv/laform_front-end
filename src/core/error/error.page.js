import { PageWrapper } from '../../lib/common/page-wrapper';
import { ContentLayout } from '../../lib/element/layout';
import { ErrorContainer } from './error.container';

export function ErrorPage(props) {
  const { errorStatus } = props;

  return (
    <PageWrapper>
      <ContentLayout horizontal="center">
        <ErrorContainer errorStatus={errorStatus} />
      </ContentLayout>
    </PageWrapper>
  );
}

export const Error401Page = () => <ErrorPage errorStatus={401} />;
export const Error404Page = () => <ErrorPage errorStatus={404} />;
export const Error500Page = () => <ErrorPage errorStatus={500} />;
