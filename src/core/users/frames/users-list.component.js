import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../../asset/svg/user.svg';
import { Divider } from '../../../lib/element/divider';
import { Spinner } from '../../../lib/element/spinner';
import { TextPrimary, TextSecondary } from '../../../lib/element/text';
import { LinkSecondary } from '../../../lib/element/link';
import { spacing, THEME_COLOR } from '../../../lib/theme';
import React from 'react';

export function UsersListComponent(props) {
  const { isPending, users } = props;

  if (isPending) return <Spinner />;

  return (
    <Container>
      {users.map((item) => {
        const { id, login, emailConfirmed, notificationEmail } = item;
        return (
          <React.Fragment key={id}>
            <Content>
              <CaseLink path={`user/${id}`}>
                <UserIcon />
                <TextSecondary>{login}</TextSecondary>
              </CaseLink>
              <Column>
                <Case>
                  <TextSecondary tid="PROFILE.ACCOUNT_STATE" />
                  &nbsp;
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
                  &nbsp;
                  <StatusInfo
                    status={notificationEmail}
                    tid={notificationEmail ? 'OTHER.YES' : 'OTHER.NO'}
                  />
                </Case>
              </Column>
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
  display: flex;
  gap: ${spacing(6)};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const CaseLink = styled(LinkSecondary)`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Case = styled.div`
  display: flex;
  gap: ${spacing(1)};
`;
const StatusInfo = styled(TextPrimary)`
  color: ${(props) =>
    props.status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
