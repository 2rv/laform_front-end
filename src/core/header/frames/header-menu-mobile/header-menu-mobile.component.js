import styled from 'styled-components';
import React, { useState } from 'react';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { ReactComponent as LogoMobile } from '../../../../asset/svg/logo-mobile.svg';
import { ReactComponent as CartIcon } from '../../../../asset/svg/cart.svg';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { ButtonBasic, IconButton } from '../../../../lib/element/button';

export function HeaderMenuMobileComponent(props) {
  const { cartitems = 2, setSidebarOpen, sidebarIsOpen } = props;

  return (
    <Container>
      <Content>
        <Line>
          <Button onClick={() => setSidebarOpen(!sidebarIsOpen)}>
            <Stick1 close={sidebarIsOpen} />
            <Stick2 close={sidebarIsOpen} />
            <Stick3 close={sidebarIsOpen} />
          </Button>
          <LogoMobile />
        </Line>
        <Line>
          <BadgeButton>
            <CartIcon />
            <Badge>{cartitems}</Badge>
          </BadgeButton>
        </Line>
      </Content>
    </Container>
  );
}

const BadgeButton = styled(IconButton)`
  display: flex;
  position: relative;
  background-color: ${THEME_COLOR.WHITE};
  padding: 0;
`;
const Badge = styled.span`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: -10px;
  right: -10px;
  height: 19px;
  min-width: 19px;
  padding: 0 ${spacing(1)};
  align-content: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  color: ${THEME_COLOR.WHITE};
  background-color: ${THEME_COLOR.PRIMARY_DARK};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  user-select: none;
`;
const Button = styled(IconButton)`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1.2)};
  background-color: ${THEME_COLOR.WHITE};
  padding: 0;
`;
const Stick1 = styled.div`
  width: 20px;
  min-height: 3px;
  max-height: 3px;
  background-color: ${THEME_COLOR.SECONDARY_DARK};
  transition: 0.4s;
  ${(p) => p.close && 'transform: rotate(-45deg) translate(-6px, 7px);'}
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Stick2 = styled(Stick1)`
  ${(p) => p.close && 'opacity: 0;'}
`;
const Stick3 = styled(Stick1)`
  ${(p) => p.close && 'transform: rotate(45deg) translate(-6px, -7px);'}
`;
const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  padding: ${spacing(3)} 0;
  justify-content: space-between;
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
