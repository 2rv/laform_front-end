import styled from 'styled-components';

import {
  SeewingGoodsListComponent,
  MasterClassesListComponent,
  PatternsListComponent,
  FormalizationOrderingContainer,
} from './frames';

import {
  BASKET_SEEWING_GOODS_LIST,
  BASKET_MASTER_CLASSES_LIST,
  BASKET_PATTERS_LIST,
} from './basket.constant';

import { TitlePrimary } from 'src/lib/element/title';
import { ContentLayout } from 'src/lib/element/layout';
import { spacing, THEME_SIZE } from 'src/lib/theme';

export function BasketComponent() {
  return (
    <Container>
      <ContentLayout>
        <Title tid="BASKET.TITLE" />
        <SeewingGoodsListComponent seewingGoodsList={BASKET_SEEWING_GOODS_LIST} />
        <MasterClassesListComponent masterClassesList={BASKET_MASTER_CLASSES_LIST} />
        <PatternsListComponent patternsList={BASKET_PATTERS_LIST} />
        <FormalizationOrderingContainer />
      </ContentLayout>
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

const Title = styled(TitlePrimary)`
  display: block;
  font-size: 28px;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
  margin-bottom: ${spacing(5)};
`;
