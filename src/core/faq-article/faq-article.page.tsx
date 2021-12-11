import { PageWrapper } from 'src/lib/common/page-wrapper';
import { FaqArticleContainer } from './faq-article.container';
import {
  FAQ_SIZE_ROUTE_PATH,
  FAQ_DELIVERY_PAYMENT_ROUTE_PATH,
  FAQ_LEGAL_INFORMATION_ROUTE_PATH,
  FAQ_PRIVACY_POLICY_ROUTE_PATH,
  FAQ_TERMS_OF_USE_ROUTE_PATH,
  FAQ_ABOUT_US_ROUTE_PATH,
  FAQ_ROUTE_PATH,
} from './faq-article.constant';

interface FaqArticlePageProps {
  name: string;
  titleTid?: string;
}

function FaqArticlePage(props: FaqArticlePageProps) {
  const { name, titleTid } = props;
  return (
    <PageWrapper>
      <FaqArticleContainer titleTid={titleTid} name={name} />
    </PageWrapper>
  );
}

export const FaqSizePage = () => (
  <FaqArticlePage titleTid="Как выбрать размер" name={FAQ_SIZE_ROUTE_PATH} />
);
export const FaqDeliveryPaymentPage = () => (
  <FaqArticlePage
    titleTid="Доставка и оплата"
    name={FAQ_DELIVERY_PAYMENT_ROUTE_PATH}
  />
);
export const FaqLegalInformationPage = () => (
  <FaqArticlePage
    titleTid="OTHER.LEGAL_INFORMATION"
    name={FAQ_LEGAL_INFORMATION_ROUTE_PATH}
  />
);
export const FaqPrivacyPolicyPage = () => (
  <FaqArticlePage
    titleTid="OTHER.PRIVACY_POLICY"
    name={FAQ_PRIVACY_POLICY_ROUTE_PATH}
  />
);
export const FaqTermsOfUsePage = () => (
  <FaqArticlePage
    titleTid="OTHER.TERMS_OF_USE"
    name={FAQ_TERMS_OF_USE_ROUTE_PATH}
  />
);
export const FaqAboutUsPage = () => (
  <FaqArticlePage
    titleTid="HEADER.MENU_ITEMS.ABOUT_US"
    name={FAQ_ABOUT_US_ROUTE_PATH}
  />
);
export const FaqPage = () => <FaqArticlePage name={FAQ_ROUTE_PATH} />;
