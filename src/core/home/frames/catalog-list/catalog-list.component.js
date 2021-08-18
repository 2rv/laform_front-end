import { useEffect } from 'react';
import styled from 'styled-components';

import { spacing, THEME_SIZE } from '../../../../lib/theme';

import { CatalogItemComponent } from './catalog-item.component';

export function CatalogListComponent(props) {
  const { items } = props;
  return (
    <Container>
      {items.map((data, index) => (
        <CatalogItemComponent key={index} data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: ${spacing(6)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 262.5px);
  @media only screen and (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 170px);
    gap: ${spacing(3)};
  }
  @media only screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, minmax(160px, fit-content));
    gap: ${spacing(2)};
  }
`;
