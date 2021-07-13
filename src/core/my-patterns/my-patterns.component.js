import styled from 'styled-components';

import { MyPatternsListComponent } from './frame';

import { MY_PATTERNS_LIST } from './my-patterns.constant';

import { TitlePrimary } from 'src/lib/element/title';
import { ContentLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';

export function MyPatternsComponent() {
  return (
    <Container>
      <Content>
        <TitlePrimary tid="PATTERNS.MY_PATTERNS.TITLE" />
        <MyPatternsListComponent myPatternsList={MY_PATTERNS_LIST} />
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
