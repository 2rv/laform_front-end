import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { EditCompilationListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function EditCompilationComponent(props) {
  const { bestGoodsItems, bestMasterClassesItems, bestArticlesItems } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="ПОДБОРКИ" />
          <EditCompilationListComponent
            title="Лучшие товары"
            items={bestGoodsItems}
          />
          <EditCompilationListComponent
            title="Лучшие мастер-классы"
            items={bestMasterClassesItems}
          />
          <EditCompilationListComponent
            title="Лучшие полезные статьи"
            items={bestArticlesItems}
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
