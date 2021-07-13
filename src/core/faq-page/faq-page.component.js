import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { FaqListComponent } from '../faq-list';
import {
  TEST_MAIN_ITEMS_FAQ_PAGE,
  TEST_SALE_ITEMS_FAQ_PAGE,
} from './faq-page.constant';
import { InformationListContainer } from './frame';
export function FaqPageComponent({ items }) {
  return (
    <Container>
      <Content>
        <IndentLayout type="medium">
          <InformationListContainer />
          <FaqListComponent items={TEST_MAIN_ITEMS_FAQ_PAGE} />
          <FaqListComponent
            titleTid={'Вопросы о продаже'}
            items={TEST_SALE_ITEMS_FAQ_PAGE}
          />
        </IndentLayout>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
