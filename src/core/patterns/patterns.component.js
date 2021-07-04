import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { PatternsSubMenuComponent } from './frames';
import { PatternsFormFilterContainer } from './frames';
import { BasicCardList } from '../../lib/element/card-list';

export function PatternsComponent(props) {
  const {
    dataPatternItems,
    menuItems,
    activePath,
    initialValue,
    categoryOptions,
    tagsOptions,
    fieldName,
  } = props;

  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="PATTERNS.PATTERNS.TITLE" />
          <PatternsSubMenuComponent items={menuItems} activePath={activePath} />
          <PatternsFormFilterContainer
            categoryOptions={categoryOptions}
            tagsOptions={tagsOptions}
            initialValue={initialValue}
            fieldName={fieldName}
          />
          <BasicCardList
            items={dataPatternItems}
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
