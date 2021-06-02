import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderLogoContainer } from '../header-logo';
import { HeaderContainer } from '../header';

import { ErrorContainer } from './error.container';

export function ErrorPage(props) {
  const { errorStatus } = props;

  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <PageLayout horizontal="center">
          <ContentLayout type="small">
            <ErrorContainer errorStatus={errorStatus} />
          </ContentLayout>
        </PageLayout>
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}

export const Error401Page = () => <ErrorPage errorStatus={401} />;
export const Error404Page = () => <ErrorPage errorStatus={404} />;
export const Error500Page = () => <ErrorPage errorStatus={500} />;
