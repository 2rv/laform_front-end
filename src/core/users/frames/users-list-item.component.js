import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../../asset/svg/user.svg';
import { Divider } from '../../../lib/element/divider';
import { TextPrimary, TextSecondary } from '../../../lib/element/text';
import { LinkSecondary } from '../../../lib/element/link';
import { spacing, THEME_COLOR } from '../../../lib/theme';

export function UsersListItemComponent(props) {
  const { id, login, emailConfirmed, notificationEmail } = props;
  return (
    <List>
      <UsersImageLogin>
        <Link
          path={ABOUT_ACCOUNT_ROUTE_PATH}
          pathConfig={{ dynamic: true, params: { id: id } }}
        >
          <UserIcon />
          <TextSecondary>{login}</TextSecondary>
        </Link>
      </UsersImageLogin>
      <UsersInfo>
        <div>
          <TextSecondary tid="PROFILE.ACCOUNT_STATE" />
          &nbsp;
          <StatusInfo
            status={emailConfirmed}
            tid={emailConfirmed ? 'PROFILE.VERIFIED' : 'PROFILE.NOT_VERIFIED'}
          />
        </div>

        <div>
          <TextSecondary tid="PROFILE.SUBSCRIBED_TO_MAILING_LISTS" />
          &nbsp;
          <StatusInfo
            status={notificationEmail}
            tid={notificationEmail ? 'OTHER.YES' : 'OTHER.NO'}
          />
        </div>
      </UsersInfo>
      <Divider />
    </List>
  );
}

const List = styled.li`
  display: flex;
  width: 100%;
  gap: ${spacing(3)};
`;
const UsersImageLogin = styled.div`
  display: flex;
  align-items: center;
`;
const UsersInfo = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
const Link = styled(LinkSecondary)`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${spacing(2)};
`;
const StatusInfo = styled(TextPrimary)`
  color: ${(props) =>
    props.status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
