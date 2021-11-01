import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LinkSecondary } from '../../lib/element/link';
import { IconButton } from '../../lib/element/button';
import { ReactComponent as TShirtIcon } from '../../asset/svg/tee-shirt.svg';
import { ReactComponent as MasterClassIcon } from '../../asset/svg/mobile-master-class.svg';
import { ReactComponent as UserIcon } from '../../asset/svg/mobile-user.svg';
import { ReactComponent as CartIcon } from '../../asset/svg/mobile-cart.svg';
import { setLinkRedirect } from 'src/main/navigation';
import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { BASKET_ROUTE_PATH } from '../basket';
import { SIGNUP_ROUTE_PATH } from 'src/core/signup';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { useSelector } from 'react-redux';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';

export function MobileNavMenu(props) {
  const { activePath } = props;
  const { isAuth } = useSelector((state) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
  }));

  return (
    <Container>
      <Button onClick={setLinkRedirect(PATTERNS_ROUTE_PATH)}>
        <TShirtStyledIcon
          active={
            activePath?.startsWith(PATTERNS_ROUTE_PATH) ? 'true' : undefined
          }
        />
      </Button>

      <Button onClick={setLinkRedirect(MASTER_CLASSES_ROUTE_PATH)}>
        <MasterClassStyledIcon
          active={
            activePath?.startsWith(MASTER_CLASSES_ROUTE_PATH)
              ? 'true'
              : undefined
          }
        />
      </Button>

      <Button
        onClick={setLinkRedirect(
          isAuth ? USER_ORDERS_ROUTE_PATH : SIGNUP_ROUTE_PATH,
        )}
      >
        <UserStyledIcon
          active={
            activePath?.startsWith(USER_ORDERS_ROUTE_PATH) ? 'true' : undefined
          }
        />
      </Button>

      <Button onClick={setLinkRedirect(BASKET_ROUTE_PATH)}>
        <CartStyledIcon
          active={
            activePath?.startsWith(BASKET_ROUTE_PATH) ? 'true' : undefined
          }
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
  display: none;
  gap: ${spacing(6)};
  align-items: center;
  height: 55px;
  justify-content: space-evenly;
  background-color: ${THEME_COLOR.GRAY};
  @media screen and (max-width: 720px) {
    display: flex;
  }
`;
const Button = styled(IconButton)`
  padding: 0;
`;
const MasterClassStyledIcon = styled(MasterClassIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;

const TShirtStyledIcon = styled(TShirtIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
          /* stroke: ${THEME_COLOR.SECONDARY_DARK}; */
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
          /* stroke: ${THEME_COLOR.TEXT.LIGHT}; */
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
const UserStyledIcon = styled(UserIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;
