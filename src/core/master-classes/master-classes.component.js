import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { BasicCardList } from 'src/lib/element/card-list';
import { MasterClassesFormFilterContainer } from './frames';

export function MasterClassesComponent(props) {
  const {
    masterClassesData,
    categoryOptions,
    tagsOptions,
    initialValue,
    fieldName,
  } = props;

  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
          <MasterClassesFormFilterContainer
            categoryOptions={categoryOptions}
            tagsOptions={tagsOptions}
            initialValue={initialValue}
            fieldName={fieldName}
          />
          <BasicCardList
            items={masterClassesData}
            actions={['OTHER.PURCHASED', 'OTHER.BUY']}
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
