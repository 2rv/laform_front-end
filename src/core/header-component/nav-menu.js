import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LinkSecondary } from '../../lib/element/link';

export function NavMenu(props) {
  const { items, activePath } = props;
  return (
    <Container>
      {items.map((x, index) => (
        <Item
          key={index}
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
  gap: ${spacing(6)};
  align-items: center;
`;

const Item = styled(LinkSecondary)`
  padding: ${spacing(6)} 0;
  text-align: center;
  ${(p) =>
    p.active &&
    css`
      border-bottom: 5px solid ${THEME_COLOR.PRIMARY};
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
    `}
`;
