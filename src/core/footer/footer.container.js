import { useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { FooterComponent } from './footer.component';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';
import { FEEDBACK_ROUTE_PATH } from '../feedback';
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
} from '../faq-article';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function FooterContainer() {
  const { isAuth } = useSelector((state) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const laFormeLinkItems = {
    title: 'FOOTER.MENU.SECTION1.TITLE',
    items: [
      {
        tid: 'FOOTER.MENU.SECTION1.MY_PURCHASES',
        path: isAuth ? USER_ORDERS_ROUTE_PATH : LOGIN_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.WISH_LIST',
        path: isAuth ? ALL_LIKES_ROUTE_PATH() : LOGIN_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.LA_FORME_PATTERNS',
        path: FAQ_LAFORME_PATTERNS_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.LA_FORME_STUDIO',
        path: FAQ_LAFORME_STUDIO_ROUTE_PATH,
      },
    ],
  };
  const faqLinkItems = {
    title: 'FOOTER.MENU.SECTION2.TITLE',
    items: [
      {
        tid: 'FOOTER.MENU.SECTION2.HOW_TO_CHOOSE_SIZE',
        path: FAQ_SIZE_ROUTE_PATH,
      },
      {
        tid: 'Как распечатать',
        path: FAQ_HOW_PRINT_ROUTE_PATH,
      },
      {
        tid: 'Как склеить выкройку',
        path: FAQ_HOW_GLUE_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION2.DELIVERY_AND_PAYMENT',
        path: FAQ_DELIVERY_PAYMENT_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION2.QNA',
        path: FAQ_ROUTE_PATH,
      },
    ],
  };
  const contactLinkItems = {
    title: 'FOOTER.MENU.SECTION3.TITLE',
    items: [
      {
        tid: 'FOOTER.MENU.SECTION3.LEGAL_INFO',
        path: FAQ_LEGAL_INFORMATION_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION3.PRIVACY_POLICY',
        path: FAQ_PRIVACY_POLICY_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION3.TERMS_OF_USE',
        path: FAQ_TERMS_OF_USE_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION3.FEEDBACK',
        path: FEEDBACK_ROUTE_PATH,
      },
    ],
  };

  return (
    <FooterComponent
      laFormeLinkItems={laFormeLinkItems}
      faqLinkItems={faqLinkItems}
      contactLinkItems={contactLinkItems}
    />
  );
}
