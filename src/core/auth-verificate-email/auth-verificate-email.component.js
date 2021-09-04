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
import { AUTH_VERIFICATE_EMAIL_HELP_ROUTE } from './auth-verificate-email.constant';
import { ErrorAlert } from '../../lib/element/alert';

export function AuthVerificateEmailComponent(props) {
  const { email, onResend, isPending, isError, isSuccess, errorMessage } =
    props;
  // <ContentLayout vertical="center" horizontal="center"></ContentLayout>
  return (
    <Container>
      <Content type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="AUTH.VERIFICATE_EMAIL.TITLE" />
          <div>
            <Text tid="AUTH.VERIFICATE_EMAIL.CONTENT_BEFORE" />
            <Email tid={email} />
            <Text tid="AUTH.VERIFICATE_EMAIL.CONTENT_AFTER" />
          </div>
        </SectionLayout>
        <ButtonSecondary
          tid="AUTH.VERIFICATE_EMAIL.RESEND"
          onClick={onResend}
          disabled={isPending}
        />
        <div>
          <LightText tid="AUTH.VERIFICATE_EMAIL.CODE_DIDNT_ARRIVED" />
          &nbsp;
          <LinkPrimary
            path={AUTH_VERIFICATE_EMAIL_HELP_ROUTE}
            tid="AUTH.VERIFICATE_EMAIL.HELP"
          />
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
`;
const Email = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const LightText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
