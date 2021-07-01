import styled from 'styled-components';

import { TabsComponent, TableComponent } from './frames';

import { ContentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

const PURCHASES_LIST = [
  {
    id: 1,
    title: 'HOME.CATALOG_LIST.SEEWING_GOODS.TITLE',
    image: {
      url: '/static/test/Popular-gods-2.png',
      alt: 'Popular Gods 2',
    },
    details: {
      color: 'PURCHASE.SEЕWING_GOODS.DETAILS.COLOR.GREEN',
      size: '15/170 250',
      category: 'PURCHASE.SEЕWING_GOODS.DETAILS.CATEGORY.OUTERWEAR',
      count: 1,
    },
    price: '3,200',
    condition: 'delivered',
  },
  {
    id: 2,
    title: 'HOME.CATALOG_LIST.SEEWING_GOODS.TITLE',
    image: {
      url: '/static/test/Popular-gods-1.png',
      alt: 'Popular Gods 1',
    },
    details: {
      color: 'PURCHASE.SEЕWING_GOODS.DETAILS.COLOR.WHITE',
      size: '25/180 250',
      category: 'PURCHASE.SEЕWING_GOODS.DETAILS.CATEGORY.OUTERWEAR',
      count: 3,
    },
    price: '699',
    condition: 'paid',
  },
];

export function MyPurchasesComponent() {
  return (
    <Container>
      <Content>
        <Headline tid="PURCHASE.SEЕWING_GOODS.MY_PURCHASES" />
        <TabsComponent />
        <TableComponent purchasesList={PURCHASES_LIST} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(2)};
`;

const Headline = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
