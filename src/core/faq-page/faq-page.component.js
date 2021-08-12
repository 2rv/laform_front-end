import { SectionLayout } from '../../lib/element/layout';
import { FaqListComponent } from '../faq-list';
import {
  TEST_MAIN_ITEMS_FAQ_PAGE,
  TEST_SALE_ITEMS_FAQ_PAGE,
} from './faq-page.constant';
import { InformationListContainer } from './frame';

export function FaqPageComponent({ items }) {
  return (
    <SectionLayout>
      <InformationListContainer />
      <FaqListComponent items={TEST_MAIN_ITEMS_FAQ_PAGE} />
      <FaqListComponent
        titleTid={'Вопросы о продаже'}
        items={TEST_SALE_ITEMS_FAQ_PAGE}
      />
    </SectionLayout>
  );
}
