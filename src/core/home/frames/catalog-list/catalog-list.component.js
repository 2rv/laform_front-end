import { useEffect } from 'react';
import styled from 'styled-components';

import { spacing, THEME_SIZE } from '../../../../lib/theme';

import { CatalogItemComponent } from './catalog-item.component';

export function CatalogListComponent(props) {
  const { className, items } = props;
  return (
    <Container className={className}>
      {items.map((x) => (
        <CatalogItemComponent key={x.title} {...x} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing(6)};
  width: 100%;
  @media only screen and (min-width: 721px) and (max-width: 1259px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing(3)};
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
