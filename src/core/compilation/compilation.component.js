import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import {
  CompilationSubMenuComponent,
  CompilationListComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CompilationComponent(props) {
  const { subMenuItems, activePath, items } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="COMPILATION.TITLE" />
          <CompilationSubMenuComponent
            activePath={activePath}
            items={subMenuItems}
          />
          <CompilationListComponent items={items} />
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
