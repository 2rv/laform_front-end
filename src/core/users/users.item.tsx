import styled from 'styled-components';
import { ReactComponent as UserIcon } from 'src/asset/svg/user.svg';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { LinkSecondary } from 'src/lib/element/link';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { USER_ROLE } from 'src/lib/common/auth';
import { UsersItemProps } from './users.type';
import { Popup } from 'src/lib/element/popup';
import { FieldSelect } from 'src/lib/element/field';
import { ButtonBasic, ButtonPrimary } from 'src/lib/element/button';
import { ChangeEvent, useState } from 'react';
import { ConvertDate } from 'src/lib/common/time';

export function UsersItem(props: UsersItemProps) {
  const { data, onUpdate } = props;
  const {
    id,
    login,
    emailConfirmed,
    notificationEmail,
    role,
    receivesNewOrders,
    createDate,
  } = data;

  const userRole =
    role === USER_ROLE.BLOCKED
      ? 'PROFILE.ROLE.BLOCKED'
      : role === USER_ROLE.USER
      ? 'PROFILE.ROLE.USER'
      : role === USER_ROLE.ADMIN
      ? 'PROFILE.ROLE.ADMIN'
      : '';

  const [roleValue, setRole] = useState<USER_ROLE>(role);
  const [receiveValue, setReceive] = useState<number>(
    receivesNewOrders ? 1 : 0,
  );

  return (
    <Container>
      <LinkCase path={'/'} pathConfig={{ params: { id: id } }}>
        <UserIcon />
        <LoginText>{login}</LoginText>
      </LinkCase>
      <ColumnCase>
        <div>
          <TextSecondary tid="Зарегистрирован -" />
          &nbsp;
          <TextPrimary tid={ConvertDate(createDate, 'PPP')} />
        </div>

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

        <div>
          <TextSecondary tid="Получает уведомления о новых заказах" />
          &nbsp;
          <StatusInfo
            status={receivesNewOrders}
            tid={receivesNewOrders ? 'OTHER.YES' : 'OTHER.NO'}
          />
        </div>

        <div>
          <TextSecondary tid="PROFILE.ROLE.TITLE" />
          &nbsp;
          <TextPrimary tid={userRole} />
        </div>
      </ColumnCase>

      <Popup
        content={(setVisible) => (
          <ModalContent>
            <FieldSelect
              options={[
                { id: USER_ROLE.BLOCKED, tid: 'PROFILE.ROLE.BLOCK' },
                { id: USER_ROLE.USER, tid: 'PROFILE.ROLE.USER' },
                { id: USER_ROLE.ADMIN, tid: 'PROFILE.ROLE.ADMIN' },
              ]}
              value={roleValue}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setRole(+e.target.value)
              }
            />
            <FieldSelect
              titleTid="Получает уведомление о новых заказах"
              options={[
                { id: 0, tid: 'Нет' },
                { id: 1, tid: 'Да' },
              ]}
              value={receiveValue}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setReceive(+e.target.value)
              }
            />

            <ButtonPrimary
              tid="OTHER.SAVE"
              onClick={() => {
                onUpdate(id, {
                  role: roleValue,
                  receivesNewOrders: Boolean(receiveValue),
                });
                setVisible(false);
              }}
            />
          </ModalContent>
        )}
        children={<ButtonBasic tid="PROFILE.ROLE.CHANGE_ROLE" />}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: ${spacing(6)};
  @media screen and (max-width: 875px) {
    grid-template-columns: 1fr;
  }
`;
const LinkCase = styled(LinkSecondary)`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${spacing(2)};
`;
const LoginText = styled(TextSecondary)`
  word-break: break-word;
`;
const ColumnCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const StatusInfo = styled(TextPrimary)<{ status: boolean }>`
  color: ${(p) =>
    p.status ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.TEXT.DANGER};
`;
const ModalContent = styled.div`
  display: grid;
  width: 300px;
  gap: ${spacing(2)};
`;
