import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import {
  ContentLayout,
  PageLayout,
  SectionLayout,
} from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { LinkPrimary } from '../../lib/element/link';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../lib/theme';
import { ErrorAlert } from '../../lib/element/alert';

export function AuthVerificateEmailRecoveryAccountComponent(props) {
  const { email, onResend, isPending, isError, isSuccess, errorMessage } =
    props;

  return (
    <Container>
      <Content type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="AUTH.VERIFICATE_EMAIL.TITLE" />
          <div>
            <Text tid="AUTH.VERIFICATE_EMAIL.CONTENT_BEFORE" />
            <Email tid={email} />
            <Text tid="было отправлена ссылка для смены пароля, нажмите на ссылку из письма для продолжения." />
          </div>
        </SectionLayout>
        <ButtonSecondary
          tid="AUTH.VERIFICATE_EMAIL.RESEND"
          onClick={onResend}
          disabled={isPending}
        />
        <div>
          <LightText tid="AUTH.VERIFICATE_EMAIL.CODE_DIDNT_ARRIVED" />
        </div>
        {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing(6)};
  align-items: center;
  line-height: 1.5;
  height: 100%;
`;
const Content = styled(SectionLayout)`
  text-align: center;
  max-width: 500px;
  min-width: 0;
`;
const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
`;
const Email = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const LightText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
