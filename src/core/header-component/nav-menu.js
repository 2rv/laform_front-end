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
  @media screen and (max-width: 1070px) {
    display: none;
  }
`;

const Item = styled(LinkSecondary)`
  padding: ${spacing(6)} 0;
  text-align: center;
  border-bottom: 5px solid transparent;
  ${(p) =>
    p.active &&
    css`
      border-color: ${THEME_COLOR.PRIMARY};
      font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
    `}
`;
