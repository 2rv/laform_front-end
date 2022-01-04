import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';
import { LinkSecondary } from 'src/lib/element/link';
import { PRODUCTS_LIKE_ROUTE_PATH } from '../products-like';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';
import { FEEDBACK_ROUTE_PATH } from '../feedback';
import {
  FAQ_SIZE_ROUTE_PATH,
  FAQ_DELIVERY_PAYMENT_ROUTE_PATH,
  FAQ_LEGAL_INFORMATION_ROUTE_PATH,
  FAQ_PRIVACY_POLICY_ROUTE_PATH,
  FAQ_TERMS_OF_USE_ROUTE_PATH,
  FAQ_ROUTE_PATH,
  FAQ_HOW_PRINT_ROUTE_PATH,
  FAQ_HOW_GLUE_ROUTE_PATH,
  FAQ_LAFORME_PATTERNS_ROUTE_PATH,
  FAQ_LAFORME_STUDIO_ROUTE_PATH,
} from '../faq-article';

const FOOTER_NAVIGATION_LINKS = [
  {
    title: 'FOOTER.MENU.SECTION1.TITLE',
    items: [
      {
        tid: 'FOOTER.MENU.SECTION1.MY_PURCHASES',
        path: USER_ORDERS_ROUTE_PATH,
      },
      {
        tid: 'FOOTER.MENU.SECTION1.WISH_LIST',
        path: PRODUCTS_LIKE_ROUTE_PATH(),
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
  },
  {
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
  },
  {
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
  },
];
export function NavLinks() {
  return (
    <Container>
      {FOOTER_NAVIGATION_LINKS.map((block, key) => {
        const { title, items } = block;
        return (
          <Content key={key}>
            <Title tid={title} />
            {items.map((link, key) => (
              <LinkSecondary key={key} tid={link.tid} path={link.path} />
            ))}
          </Content>
        );
      })}
    </Container>
  );
}
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
  line-height: 1.5;
`;
const Title = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const Container = styled.div`
  display: flex;
  gap: ${THEME_SIZE.SECTION.MEDIUM};
  @media screen and (max-width: 1070px) {
    gap: ${THEME_SIZE.SECTION.SMALL};
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: ${THEME_SIZE.SECTION.SMALL};
  }
`;
