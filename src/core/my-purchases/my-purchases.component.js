import { TitlePrimary } from 'src/lib/element/title';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { SectionLayout } from '../../lib/element/layout';
import { TableComponent } from './frames';

export function MyPurchasesComponent() {
  return (
    <SectionLayout>
      <TitlePrimary tid="PURCHASE.SEЕWING_GOODS.MY_PURCHASES" />
      <FilterTabs tabItems={tabItems} />
      <TableComponent listItems={testPurchaseList} />
    </SectionLayout>
  );
}

const tabItems = [
  { name: 'Популярные товары', type: 9 },
  { name: 'Лучшие мастер-классы', type: 0 },
  { name: 'Лучшие полезные статьи', type: 1 },
];

export const testPurchaseList = [
  {
    id: 1,
    title: 'Товары для шитья',
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
    title: 'Товары для шитья',
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
