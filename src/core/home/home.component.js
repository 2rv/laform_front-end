import styled from 'styled-components';

import { spacing } from '../../lib/theme';
import { IndentLayout } from '../../lib/element/layout';

import {
  AdvantageListContainer,
  CatalogListContainer,
  InformationListContainer,
} from './frames';

export function HomeComponent(props) {
  return (
    <Container>
      <IndentLayout type="medium">
        <CatalogListContainer />
        <InformationListContainer />
        <AdvantageListContainer />
      </IndentLayout>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 ${spacing(30)};
`;
