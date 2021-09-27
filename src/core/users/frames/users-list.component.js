import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../../asset/svg/user.svg';
import { Divider } from '../../../lib/element/divider';
import { Spinner } from '../../../lib/element/spinner';
import { TextPrimary, TextSecondary } from '../../../lib/element/text';
import { LinkSecondary } from '../../../lib/element/link';
import { ButtonBasic, ButtonPrimary } from '../../../lib/element/button';
import { Popup } from '../../../lib/element/popup';
import { FieldSelect } from '../../../lib/element/field';
import { spacing, THEME_COLOR } from '../../../lib/theme';
import { updateUserData } from '../users.action';
import { USER_ROLE } from '../../../lib/common/auth';

const userRoles = [
  { id: USER_ROLE.BLOCKED, tid: 'PROFILE.ROLE.BLOCK' },
  { id: USER_ROLE.USER, tid: 'PROFILE.ROLE.USER' },
  { id: USER_ROLE.ADMIN, tid: 'PROFILE.ROLE.ADMIN' },
];

export function UsersListComponent({ isPending, users }) {
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState('');

  const updateUserRoleHandler = (userId, setVisible) => {
    dispatch(updateUserData(userId, { role: Number(userRole) }));
    setVisible(false);
  };

  if (isPending) return <Spinner />;

  return (
    <Container>
      {users.map((item) => {
        const { id, login, emailConfirmed, notificationEmail, role } = item;
        const currentUserRole =
          role === USER_ROLE.BLOCKED
          ? 'PROFILE.ROLE.BLOCKED'
          : role === USER_ROLE.USER
          ? 'PROFILE.ROLE.USER'
          : role === USER_ROLE.ADMIN
          ? 'PROFILE.ROLE.ADMIN'
          : '';
        return (
          <React.Fragment key={id}>
            <Content>
              <CaseLink path={`user/${id}`}>
                <UserIcon />
                <LoginText>{login}</LoginText>
              </CaseLink>
              <Column>
                <Case>
                  <TextSecondary tid="PROFILE.ACCOUNT_STATE" />
                  <StatusInfo
                    status={emailConfirmed}
                    tid={
                      emailConfirmed
                        ? 'PROFILE.VERIFIED'
                        : 'PROFILE.NOT_VERIFIED'
                    }
                  />
                </Case>
                <Case>
                  <TextSecondary tid="PROFILE.SUBSCRIBED_TO_MAILING_LISTS" />
                  <StatusInfo
                    status={notificationEmail}
                    tid={notificationEmail ? 'OTHER.YES' : 'OTHER.NO'}
                  />
                </Case>
                <Case>
                  <TextSecondary tid="PROFILE.ROLE.TITLE" />
                  <TextPrimary tid={currentUserRole} />
                </Case>
              </Column>
              <Popup
                content={(setVisible) => (
                  <ModalContent>
                    <FieldSelect
                      options={userRoles}
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                    />
                    <ButtonPrimary
                      tid="OTHER.SAVE"
                      onClick={() => updateUserRoleHandler(id, setVisible)}
                      disabled={Number(userRole) === role}
                    />
                  </ModalContent>
                )}
                children={
                  <ButtonBasic tid="PROFILE.ROLE.CHANGE_ROLE" onClick={() => setUserRole(role)} />
                }
              />
            </Content>
            <Divider />
          </React.Fragment>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: ${spacing(6)};
  @media screen and (max-width: 875px) {
    grid-template-columns: 1fr;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const CaseLink = styled(LinkSecondary)`
  display: flex;
  gap: ${spacing(2)};
`;
const Case = styled.div`
  display: flex;
  gap: ${spacing(1)};
`;
const ModalContent = styled.div`
  display: grid;
  width: 250px;
  gap: ${spacing(2)};
  padding: ${spacing(2)};
`;
const LoginText = styled(TextSecondary)`
  word-break: break-word;
`;
const StatusInfo = styled(TextPrimary)`
  color: ${(props) =>
    props.status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
