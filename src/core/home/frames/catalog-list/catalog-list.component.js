import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';

import { CatalogItemComponent } from './catalog-item.component';

export function CatalogListComponent(props) {
  const { items, ...rest } = props;

  return (
    <Container {...rest}>
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
`;
