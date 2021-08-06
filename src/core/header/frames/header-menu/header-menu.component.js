import styled, { css } from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { LinkSecondary } from '../../../../lib/element/link';

export function HeaderMenuComponent(props) {
  const { items, activePath } = props;

  return (
    <Container>
      {items.map((x) => (
        <Item
          key={x.name}
          tid={x.name}
          path={x.path}
          active={activePath?.startsWith(x.path)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  gap: ${spacing(5)};
  align-items: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;

const Item = styled(LinkSecondary)`
  padding: ${spacing(5)} 0;

  ${(p) =>
    p.active &&
    css`
      border-bottom: ${spacing(1)} solid ${THEME_COLOR.PRIMARY};
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
    `}
`;
