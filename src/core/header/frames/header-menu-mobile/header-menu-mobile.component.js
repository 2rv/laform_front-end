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
import { TextSecondary, TextPrimary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { ButtonBasic, IconButton } from '../../../../lib/element/button';
import { ReactComponent as IconUser } from '../../../../asset/svg/user.svg';
import { LOGIN_ROUTE_PATH, SIGNUP_ROUTE_PATH } from '../../header.constants';

export function HeaderMenuMobileComponent(props) {
  const { cartItems, setSidebarOpen, sidebarIsOpen, logged, user, isMobile } =
    props;

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
          {logged ? (
            <Line>
              <UserIcon />
              <BolderText>{user}</BolderText>
            </Line>
          ) : (
            !isMobile && (
              <div>
                <BolderLink
                  tid="HEADER.MENU_ACTION.LOGIN"
                  path={LOGIN_ROUTE_PATH}
                />
                &nbsp;
                <TextSecondary tid="HEADER.MENU_ACTION.OR" />
                &nbsp;
                <BolderLink
                  tid="HEADER.MENU_ACTION.SIGNUP"
                  path={SIGNUP_ROUTE_PATH}
                />
              </div>
            )
          )}

          <BadgeButton>
            <CartIcon />
            <Badge>{cartItems}</Badge>
          </BadgeButton>
        </Line>
      </Content>
    </Container>
  );
}
const UserIcon = styled(IconUser)`
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const BolderLink = styled(LinkPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
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
  align-items: center;
  gap: ${spacing(3)};
`;
const BolderText = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
