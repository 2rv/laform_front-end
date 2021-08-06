import styled from 'styled-components';
import React, { useState } from 'react';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { ReactComponent as HomeMenuOpened } from '../../../../asset/svg/home-menu-mobile.svg';
import { ReactComponent as HomeMenuClosed } from '../../../../asset/svg/home-menu-mobile-closed.svg';
import { ReactComponent as LogoMobile } from '../../../../asset/svg/logo-mobile.svg';
import { ReactComponent as CartIcon } from '../../../../asset/svg/cart-mobile.svg';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { ButtonBasic } from '../../../../lib/element/button';

export function HeaderMenuMobileComponent(props) {
  const { cartitems = 2 } = props;
  const [menuopened, setmenuopened] = useState(false);
  return (
    <Container>
      <MenuContainer>
        <GroupContainer>
          {menuopened ? (
            <MenuBurger
              onClick={() => setmenuopened(false)}
              icon={HomeMenuOpened}
            />
          ) : (
            <MenuBurger
              onClick={() => setmenuopened(true)}
              icon={HomeMenuClosed}
            />
          )}
          <LogoMobile />
        </GroupContainer>
        <LinkPrimary>
          <CartContainer>
            <CartIcon />
            <CartItemsNumberContainer>
              <CartItemsNumber>{cartitems}</CartItemsNumber>
            </CartItemsNumberContainer>
          </CartContainer>
        </LinkPrimary>
      </MenuContainer>
      {menuopened && <ListContainer />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  width: 100%;
  padding: ${spacing(3)};
  height: 100px;
`;

const MenuBurger = styled(ButtonBasic)`
  padding: 0;
`;

const CartItemsNumber = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.WHITE};
`;

const CartContainer = styled.div`
  padding: ${spacing(2)};
  position: relative;
  background-color: ${THEME_COLOR.BACKGROUND.WHITE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const CartItemsNumberContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${THEME_COLOR.PRIMARY_DARK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  padding: ${spacing(3)};
`;

const GroupContainer = styled.div`
  display: flex;
  grid-column-gap: ${spacing(3)};
`;
