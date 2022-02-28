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
  FAQ_HOW_PRINT_ROUTE_PATH,
  FAQ_HOW_GLUE_ROUTE_PATH,
  FAQ_LAFORME_PATTERNS_ROUTE_PATH,
  FAQ_LAFORME_STUDIO_ROUTE_PATH,
} from './faq-article.constant';
import { FaqArticleContainerProps } from './faq-article.type';

function FaqArticlePage(props: FaqArticleContainerProps) {
  const { name, titleTid } = props;
  return (
    <PageWrapper>
      <FaqArticleContainer titleTid={titleTid} name={name} />
    </PageWrapper>
  );
}

export const FaqPage = () => <FaqArticlePage name={FAQ_ROUTE_PATH} />;
export const FaqSizePage = () => (
  <FaqArticlePage
    titleTid="FAQ.HOW_TO_CHOOSE_SIZE"
    name={FAQ_SIZE_ROUTE_PATH}
    key={FAQ_SIZE_ROUTE_PATH}
  />
);
export const FaqDeliveryPaymentPage = () => (
  <FaqArticlePage
    titleTid="FAQ.SHIPPING_AND_PAYMENT"
    name={FAQ_DELIVERY_PAYMENT_ROUTE_PATH}
    key={FAQ_DELIVERY_PAYMENT_ROUTE_PATH}
  />
);
export const FaqLegalInformationPage = () => (
  <FaqArticlePage
    titleTid="FAQ.LEGAL_INFORMATION"
    name={FAQ_LEGAL_INFORMATION_ROUTE_PATH}
    key={FAQ_LEGAL_INFORMATION_ROUTE_PATH}
  />
);
export const FaqPrivacyPolicyPage = () => (
  <FaqArticlePage
    titleTid="FAQ.PRIVACY_POLICY"
    name={FAQ_PRIVACY_POLICY_ROUTE_PATH}
    key={FAQ_PRIVACY_POLICY_ROUTE_PATH}
  />
);
export const FaqTermsOfUsePage = () => (
  <FaqArticlePage
    titleTid="FAQ.TERMS_OF_USE"
    name={FAQ_TERMS_OF_USE_ROUTE_PATH}
    key={FAQ_TERMS_OF_USE_ROUTE_PATH}
  />
);
export const FaqAboutUsPage = () => (
  <FaqArticlePage
    titleTid="FAQ.ABOUT_US"
    name={FAQ_ABOUT_US_ROUTE_PATH}
    key={FAQ_ABOUT_US_ROUTE_PATH}
  />
);
export const FaqHowPrintPage = () => (
  <FaqArticlePage
    titleTid="FAQ.HOW_TO_PRINT_PATTERN"
    name={FAQ_HOW_PRINT_ROUTE_PATH}
    key={FAQ_HOW_PRINT_ROUTE_PATH}
  />
);
export const FaqHowGluePage = () => (
  <FaqArticlePage
    titleTid="FAQ.HOW_TO_GLUE_PATTERN"
    name={FAQ_HOW_GLUE_ROUTE_PATH}
    key={FAQ_HOW_GLUE_ROUTE_PATH}
  />
);
export const FaqLaformePatternsPage = () => (
  <FaqArticlePage
    titleTid="FAQ.LAFORME_PATTERNS"
    name={FAQ_LAFORME_PATTERNS_ROUTE_PATH}
    key={FAQ_LAFORME_PATTERNS_ROUTE_PATH}
  />
);
export const FaqLaformeStuioPage = () => (
  <FaqArticlePage
    titleTid="FAQ.LAFORME_STUDIO"
    name={FAQ_LAFORME_STUDIO_ROUTE_PATH}
    key={FAQ_LAFORME_STUDIO_ROUTE_PATH}
  />
);
