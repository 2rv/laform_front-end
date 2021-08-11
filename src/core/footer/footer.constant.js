import { ReactComponent as InstagramIcon } from '../../asset/svg/instagram.svg';
import { ReactComponent as VkIcon } from '../../asset/svg/vk.svg';

export const FOOTER_MENU_ITEMS = [
  {
    sectionTid: 'FOOTER.MENU.SECTION1.TITLE',
    items: [
      { tid: 'FOOTER.MENU.SECTION1.MY_ACCOUNT', path: '/' },
      { tid: 'FOOTER.MENU.SECTION1.MY_PURCHASES', path: '/' },
      { tid: 'FOOTER.MENU.SECTION1.WISH_LIST', path: '/' },
      { tid: 'FOOTER.MENU.SECTION1.LA_FORME_PATTERNS', path: '/' },
      { tid: 'FOOTER.MENU.SECTION1.LA_FORME_STUDIO', path: '/' },
    ],
  },
  {
    sectionTid: 'FOOTER.MENU.SECTION2.TITLE',
    items: [
      { tid: 'FOOTER.MENU.SECTION2.HOW_TO_CHOOSE_SIZE', path: '/' },
      {
        tid: 'FOOTER.MENU.SECTION2.DELIVERY_AND_PAYMENT',
        path: '/',
      },
      { tid: 'FOOTER.MENU.SECTION2.QNA', path: '/' },
    ],
  },
  {
    sectionTid: 'FOOTER.MENU.SECTION3.TITLE',
    items: [
      { tid: 'FOOTER.MENU.SECTION3.LEGAL_INFO', path: '/' },
      { tid: 'FOOTER.MENU.SECTION3.PRIVACY_POLICY', path: '/' },
    ],
  },
];

export const FOOTER_SOCIAL_LINKS = [
  { icon: InstagramIcon, path: 'https://instagram.com', pathConfig: {} },
  { icon: VkIcon, path: 'https://vk.com', pathConfig: {} },
];
