import styled from 'styled-components';
import { BasicField } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';
import { spacing } from 'src/lib/theme';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, InfoAlert } from 'src/lib/element/alert';
import { recoveryAccountComponentProps } from './recovery-account.type';

export function RecoveryAccountComponent(props: recoveryAccountComponentProps) {
  const {
    state: { pending, delay, success, error },
    count,
    onSendCode,
    onChange,
    value,
  } = props;
  return (
    <Container>
      <Content>
        {pending && <LoaderPrimary />}
        <TitlePrimary tid="AUTH.RECOVERY_ACCOUNT.TITLE" />
        <BasicField
          titleTid="AUTH.RECOVERY_ACCOUNT.EMAIL.TITLE"
          placeholderTid="AUTH.RECOVERY_ACCOUNT.EMAIL.PLACEHOLDER"
          type="email"
          value={value}
          onChange={onChange}
          disabled={pending}
        />
        <ButtonSecondary
          tid={
            count
              ? 'AUTH.RECOVERY_ACCOUNT.SUBMIT_DELAY'
              : 'AUTH.RECOVERY_ACCOUNT.SUBMIT'
          }
          tvalue={{ count: count }}
          onClick={onSendCode}
          disabled={!value || pending || delay}
        />

        {success && <InfoAlert tid="AUTH.RECOVERY_ACCOUNT.SUCCESS" />}
        {error && <ErrorAlert tid={error} />}
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
