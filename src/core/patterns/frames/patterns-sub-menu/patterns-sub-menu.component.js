import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { LinkSecondary } from '../../../../lib/element/link';

export function PatternsSubMenuComponent(props) {
  const { items, activePath } = props;

  return (
    <Container>
      {items.map((x) => (
        <Tab
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
  gap: ${spacing(6)};
  align-items: center;
`;
const Tab = styled(LinkSecondary)`
  padding-bottom: ${spacing(1)};
  color: ${THEME_COLOR.SECONDARY};
  ${(p) =>
    p.active &&
    css`
      border-bottom: 2px solid ${THEME_COLOR.SECONDARY_DARK};
      font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
    `}
`;
