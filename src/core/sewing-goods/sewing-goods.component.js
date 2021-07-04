import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { BasicCardList } from 'src/lib/element/card-list';
import { SewingGoodsFormFilterContainer } from './frames';

export function SewingGoodsComponent(props) {
  const {
    dataSewingGoods,
    categoryOptions,
    tagsOptions,
    initialValue,
    fieldName,
  } = props;

  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="SEWING_GOODS.SEWING_GOODS.TITLE" />
          <SewingGoodsFormFilterContainer
            categoryOptions={categoryOptions}
            tagsOptions={tagsOptions}
            initialValue={initialValue}
            fieldName={fieldName}
          />
          <BasicCardList
            items={dataSewingGoods}
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
