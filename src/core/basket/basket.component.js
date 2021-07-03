import styled from 'styled-components';

import { SeewingGoodsListComponent, MasterClassesListComponent } from './frames';

import { BASKET_SEEWING_GOODS_LIST, BASKET_MASTER_CLASSES_LIST } from './basket.constant';

import { TitlePrimary } from 'src/lib/element/title';
import { ContentLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';
import { THEME_SIZE } from 'src/lib/theme'

export function BasketComponent() {
  return (
    <Container>
      <Content>
        <Title tid="Корзина" />
        <SeewingGoodsListComponent seewingGoodsList={BASKET_SEEWING_GOODS_LIST} />
        <MasterClassesListComponent masterClassesList={BASKET_MASTER_CLASSES_LIST} />
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

const Title = styled(TitlePrimary)`
  font-size: 28px;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
