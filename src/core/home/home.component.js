import styled from 'styled-components';

import { spacing } from '../../lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';

import {
  AdvantageListContainer,
  CatalogListContainer,
  InformationListContainer,
} from './frames';

export function HomeComponent(props) {
  return (
    <Container>
      <Content>
        <IndentLayout type="medium">
          <CatalogListContainer />
          <InformationListContainer />
          <AdvantageListContainer />
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
