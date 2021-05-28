import styled from 'styled-components';

import { spacing } from '../../../../lib/theme';

import { AdvantageItemComponent } from './advantage-item.component';

export function AdvantageListComponent(props) {
  const { items, ...rest } = props;

  return (
    <Container {...rest}>
      {items.map((x) => (
        <AdvantageItemComponent key={x.title} {...x} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(6)};
`;
