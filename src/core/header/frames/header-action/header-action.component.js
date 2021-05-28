import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CartIcon } from '../../../../asset/svg/cart.svg';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user.svg';

import { spacing } from '../../../../lib/theme';
import { LinkPrimary } from '../../../../lib/element/link';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { BadgeDark } from '../../../../lib/element/badge';
import { ModalMenu } from '../../../../lib/element/modal';
import { LOGIN_ROUTE_PATH } from '../../../login';
import { SIGNUP_ROUTE_PATH } from '../../../signup';

import { USER_MODAL_ITEMS } from './header-action.constant';

export function HeaderActionComponent(props) {
  const { logged, user, ...rest } = props;
  const [isUserModalActive, setUserModalActive] = useState(false);

  const handleUserClick = () => {
    setUserModalActive(!isUserModalActive);
  };
  const onUserModalClose = () => {
    setUserModalActive(false);
  };

  return (
    <Container logged={logged} {...rest}>
      {logged ? (
        <LoggedContainer>
          <UserContainer onClick={handleUserClick}>
            <UserIcon />
            <BolderText>{user}</BolderText>
          </UserContainer>
          {isUserModalActive && (
            <UserMenu
              items={USER_MODAL_ITEMS}
              active={isUserModalActive}
              onClose={onUserModalClose}
            />
          )}
        </LoggedContainer>
      ) : (
        <div>
          <BolderLink tid="HEADER.MENU_ACTION.LOGIN" path={LOGIN_ROUTE_PATH} />
          &nbsp;
          <TextSecondary tid="HEADER.MENU_ACTION.OR" />
          &nbsp;
          <LinkPrimary
            tid="HEADER.MENU_ACTION.SIGNUP"
            path={SIGNUP_ROUTE_PATH}
          />
        </div>
      )}
      <BadgeDark badgeContent={0}>
        <CartIcon />
      </BadgeDark>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => (p.logged ? spacing(12) : spacing(8))};
`;

const BolderLink = styled(LinkPrimary)`
  font-weight: 500;
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
`;

const BolderText = styled(TextPrimary)`
  font-weight: 500;
`;
