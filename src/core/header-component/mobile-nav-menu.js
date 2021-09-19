import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LinkSecondary } from '../../lib/element/link';
import { IconButton } from '../../lib/element/button';
import { ReactComponent as CartIcon } from '../../asset/svg/mobile-cart.svg';
import { ReactComponent as TShirtIcon } from '../../asset/svg/tee-shirt.svg';
import { ReactComponent as SewingIcon } from '../../asset/svg/mobile-sewing.svg';
import { setLinkRedirect } from 'src/main/navigation';

export function MobileNavMenu(props) {
  const { activePath } = props;
  return (
    <Container>
      <Button onClick={setLinkRedirect('/sewing-goods')}>
        <SewingStyledIcon
          active={activePath?.startsWith('/sewing-goods') ? 'true' : undefined}
        />
      </Button>

      <Button onClick={setLinkRedirect('/patterns')}>
        <TShirtStyledIcon
          active={activePath?.startsWith('/patterns') ? 'true' : undefined}
        />
      </Button>

      <Button onClick={setLinkRedirect('/basket')}>
        <CartStyledIcon
          active={activePath?.startsWith('/basket') ? 'true' : undefined}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  left: 0;
  display: flex;
  gap: ${spacing(6)};
  align-items: center;
  height: 55px;
  justify-content: space-evenly;
  background-color: ${THEME_COLOR.GRAY};
`;
const Button = styled(IconButton)`
  padding: 0;
`;
const SewingStyledIcon = styled(SewingIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
          stroke: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
          stroke: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;

const TShirtStyledIcon = styled(TShirtIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
          stroke: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
          stroke: ${THEME_COLOR.TEXT.LIGHT};
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;

const CartStyledIcon = styled(CartIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;
