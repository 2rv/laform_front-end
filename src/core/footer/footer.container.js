import { FooterComponent } from './footer.component';

export function FooterContainer() {
  return (
    <FooterComponent
      laFormeLinkItems={laFormeLinkItems}
      faqLinkItems={faqLinkItems}
      contactLinkItems={contactLinkItems}
    />
  );
}

const laFormeLinkItems = {
  title: 'FOOTER.MENU.SECTION1.TITLE',
  items: [
    { tid: 'FOOTER.MENU.SECTION1.MY_ACCOUNT', path: '/' },
    { tid: 'FOOTER.MENU.SECTION1.MY_PURCHASES', path: '/' },
    { tid: 'FOOTER.MENU.SECTION1.WISH_LIST', path: '/' },
    { tid: 'FOOTER.MENU.SECTION1.LA_FORME_PATTERNS', path: '/' },
    { tid: 'FOOTER.MENU.SECTION1.LA_FORME_STUDIO', path: '/' },
  ],
};
const faqLinkItems = {
  title: 'FOOTER.MENU.SECTION2.TITLE',
  items: [
    { tid: 'FOOTER.MENU.SECTION2.HOW_TO_CHOOSE_SIZE', path: '/' },
    {
      tid: 'FOOTER.MENU.SECTION2.DELIVERY_AND_PAYMENT',
      path: '/',
    },
    { tid: 'FOOTER.MENU.SECTION2.QNA', path: '/' },
  ],
};
const contactLinkItems = {
  title: 'FOOTER.MENU.SECTION3.TITLE',
  items: [
    { tid: 'FOOTER.MENU.SECTION3.LEGAL_INFO', path: '/' },
    { tid: 'FOOTER.MENU.SECTION3.PRIVACY_POLICY', path: '/' },
  ],
};
