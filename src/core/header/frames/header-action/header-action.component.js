import { useState } from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { LinkPrimary } from '../../../../lib/element/link';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { BadgeDark } from '../../../../lib/element/badge';
import { ModalMenu } from '../../../../lib/element/modal';
import { ReactComponent as CartIcon } from '../../../../asset/svg/cart.svg';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user.svg';
import { LOGIN_ROUTE_PATH, SIGNUP_ROUTE_PATH } from '../../header.constants';
import {
  USER_MODAL_ITEMS,
  ADMIN_USER_MODAL_ITEMS,
} from './header-action.constant';
import { USER_ROLE } from '../../../../lib/common/auth';

export function HeaderActionComponent(props) {
  const { logged, user, role } = props;
  const [isUserModalActive, setUserModalActive] = useState(false);

  const handleUserClick = () => {
    setUserModalActive(!isUserModalActive);
  };
  const onUserModalClose = () => {
    setUserModalActive(false);
  };

  return (
    <Container logged={logged}>
      {logged ? (
        <LoggedContainer>
          <UserContainer onClick={handleUserClick}>
            <UserIcon />
            <BolderText>{user}</BolderText>
          </UserContainer>
          {isUserModalActive && (
            <UserMenu
              items={
                role === USER_ROLE.ADMIN
                  ? ADMIN_USER_MODAL_ITEMS
                  : USER_MODAL_ITEMS
              }
              active={isUserModalActive}
              onClose={onUserModalClose}
            />
          )}
        </LoggedContainer>
      ) : (
        <AuthLinks>
          <BolderLink tid="HEADER.MENU_ACTION.LOGIN" path={LOGIN_ROUTE_PATH} />
          &nbsp;
          <TextSecondary tid="HEADER.MENU_ACTION.OR" />
          &nbsp;
          <BolderLink
            tid="HEADER.MENU_ACTION.SIGNUP"
            path={SIGNUP_ROUTE_PATH}
          />
        </AuthLinks>
      )}
      <BadgeDark badgeContent={0}>
        <CartIcon />
      </BadgeDark>
    </Container>
  );
}

const AuthLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.logged ? spacing(12) : spacing(8))};
  padding-right: ${spacing(4)};
`;
const LoggedContainer = styled.div`
  position: relative;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  padding: ${spacing(1)} 0;
  cursor: pointer;
`;

const UserMenu = styled(ModalMenu)`
  margin-top: ${spacing(1)};
  z-index: 1;
`;
const BolderLink = styled(LinkPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const BolderText = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
