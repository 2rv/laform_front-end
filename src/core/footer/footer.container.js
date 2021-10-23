import { useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { SIGNUP_ROUTE_PATH } from 'src/lib/common/signup/signup.constant';
import { ABOUT_ROUTE_PATH } from '../about';
import { FAQ_ROUTE_PATH } from '../faq';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { PURCHASE_PRODUCTS_ROUTE_PATH } from '../purchase-products';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { FooterComponent } from './footer.component';

export function FooterContainer() {
  const { isAuth } = useSelector((state) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  const laFormeLinkItems = {
    title: 'FOOTER.MENU.SECTION1.TITLE',
    items: [
      {
        tid: 'FOOTER.MENU.SECTION1.MY_ACCOUNT',
        path: isAuth ? PURCHASE_PRODUCTS_ROUTE_PATH : SIGNUP_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.MY_PURCHASES',
        path: isAuth ? PURCHASE_PRODUCTS_ROUTE_PATH : SIGNUP_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.WISH_LIST',
        path: isAuth ? ALL_LIKES_ROUTE_PATH : SIGNUP_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.LA_FORME_PATTERNS',
        path: PATTERNS_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.LA_FORME_STUDIO',
        path: ABOUT_ROUTE_PATH,
      },
    ],
  };

  const faqLinkItems = {
    title: 'FOOTER.MENU.SECTION2.TITLE',
    items: [
      {
        tid: 'FOOTER.MENU.SECTION2.HOW_TO_CHOOSE_SIZE',
        path: FAQ_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION2.DELIVERY_AND_PAYMENT',
        path: isAuth ? SETTINGS_ROUTE_PATH : SIGNUP_ROUTE_PATH,
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
        path: ABOUT_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION3.PRIVACY_POLICY',
        path: ABOUT_ROUTE_PATH,
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
