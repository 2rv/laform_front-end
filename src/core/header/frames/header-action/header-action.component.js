import styled from 'styled-components';

import { ReactComponent as CartIcon } from '../../../../asset/svg/cart.svg';
import { ReactComponent as UserIcon } from '../../../../asset/svg/user.svg';

import { spacing } from '../../../../lib/theme';
import { LinkPrimary } from '../../../../lib/element/link';
import { TextPrimary, TextSecondary } from '../../../../lib/element/text';
import { BadgeDark } from '../../../../lib/element/badge';
import { LOGIN_ROUTE_PATH } from '../../../login';
import { SIGNUP_ROUTE_PATH } from '../../../signup';

export function HeaderActionComponent(props) {
  const { logged, user, ...rest } = props;

  return (
    <Container logged={logged} {...rest}>
      {logged ? (
        <UserContainer>
          <UserIcon />
          <BolderText>{user}</BolderText>
        </UserContainer>
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

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;

const BolderText = styled(TextPrimary)`
  font-weight: 500;
`;
