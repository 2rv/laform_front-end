import styled from 'styled-components';

import { spacing } from '../../lib/theme';
import { ContentLayout } from '../../lib/element/layout';

import { InformationDirectoryListContainer } from './frames';

export function InfoComponent() {
  return (
    <Container>
      <Content>
        <InformationDirectoryListContainer />
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
