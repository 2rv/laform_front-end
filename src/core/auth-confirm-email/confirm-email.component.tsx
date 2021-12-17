import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TitlePrimary } from 'src/lib/element/title';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import { LinkPrimary } from 'src/lib/element/link';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { FEEDBACK_ROUTE_PATH } from '../feedback';
import { ConfirmEmailComponentProps } from './confirm-email.type';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { BasicField } from 'src/lib/element/field';

export function ConfirmEmailComponent(props: ConfirmEmailComponentProps) {
  const {
    state: {
      pending,
      delay,
      sendSuccess,
      sendError = '',
      confirmSuccess,
      confirmError = '',
    },
    email,
    count,
    onSendCode,
    onConfirmEmail,
    onChange,
    value,
  } = props;

  return (
    <Container>
      <Content>
        <Title tid="AUTH.CONFIRM_EMAIL.TITLE" />

        <div>
          <Text tid="AUTH.CONFIRM_EMAIL.CONTENT_BEFORE" />
          <Email tid={email} />
          <Text tid="AUTH.CONFIRM_EMAIL.CONTENT_AFTER" />
        </div>

        <ButtonSecondary
          tid={
            count ? 'AUTH.CONFIRM_EMAIL.COUNTDOWN' : 'AUTH.CONFIRM_EMAIL.RESEND'
          }
          tvalue={{ count: count }}
          onClick={onSendCode}
          disabled={pending || delay}
        />

        <BasicField
          titleTid="Код подтверждения"
          placeholderTid="Введите код подтверждения"
          onChange={onChange}
          value={value}
          disabled={confirmSuccess}
        />

        <ButtonPrimary
          tid="Подтвердить почту"
          onClick={onConfirmEmail}
          disabled={pending || !value || confirmSuccess}
        />

        <div>
          <LightText tid="AUTH.CONFIRM_EMAIL.CODE_DIDNT_ARRIVED" />
          &nbsp;
          <LinkPrimary
            path={FEEDBACK_ROUTE_PATH}
            tid="AUTH.CONFIRM_EMAIL.HELP"
          />
        </div>

        <div>
          <LightText tid="AUTH.CONFIRM_EMAIL.CHOOSE_WRONG_EMAIL" />
          &nbsp;
          <LinkPrimary
            path={SETTINGS_ROUTE_PATH}
            tid="AUTH.CONFIRM_EMAIL.CHANGE_EMAIL_SETTINGS"
          />
        </div>
        {sendSuccess && delay && (
          <InfoAlert tid="AUTH.CONFIRM_EMAIL.SEND_SUCCESS" />
        )}
        {confirmSuccess && delay && (
          <SuccessAlert tid="AUTH.CONFIRM_EMAIL.SUCCESS" />
        )}
        {(sendError || confirmError) && (
          <ErrorAlert tid={sendError || confirmError} />
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  width: 100%;
  max-width: 500px;
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const Email = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const LightText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
  line-height: 1.5;
`;
