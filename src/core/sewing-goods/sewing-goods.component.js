import {
  SEWING_GOODS_FILTER_CATEGORY_OPTIONS,
  SEWING_GOODS_FILTER_TAGS_OPTIONS,
} from './sewing-goods.constant';
import {
  SEWING_GOODS_FORM_FILTER_FIELD_NAME,
  SEWING_GOODS_FILTER_FIELD_NAME,
} from './sewing-goods.type';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { BasicCardList } from 'src/lib/element/card-list';
import { SewingGoodsFormFilterContainer } from './frames';

export function SewingGoodsComponent(props) {
  const { items } = props;
  const sewingGoodsFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [SEWING_GOODS_FILTER_FIELD_NAME.CATEGORY]:
          SEWING_GOODS_FILTER_CATEGORY_OPTIONS[0].id,
        [SEWING_GOODS_FILTER_FIELD_NAME.TAGS]:
          SEWING_GOODS_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <Container>
      <Content>
        <IndentLayout>
          <Title tid="SEWING_GOODS.SEWING_GOODS.TITLE" />
          <SewingGoodsFormFilterContainer
            categoryOptions={SEWING_GOODS_FILTER_CATEGORY_OPTIONS}
            tagsOptions={SEWING_GOODS_FILTER_TAGS_OPTIONS}
            initialValue={sewingGoodsFormFilterGetInitialValue()}
            fieldName={SEWING_GOODS_FORM_FILTER_FIELD_NAME}
          />
          <BasicCardList
            items={items}
            actions={['OTHER.SELECTED', 'OTHER.SELECT']}
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
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
