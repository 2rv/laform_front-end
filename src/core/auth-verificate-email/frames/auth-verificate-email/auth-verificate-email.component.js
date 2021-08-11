import styled from 'styled-components';

import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { ContentLayout, IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { THEME_SIZE } from '../../../../lib/theme';

import { AUTH_VERIFICATE_EMAIL_HELP_ROUTE } from '../../auth-verificate-email.constant';

export function AuthVerificateEmailComponent(props) {
  const { email, onResend, isPending } = props;

  return (
    <Container type="small">
      <IndentLayout type="text">
        <Title tid="AUTH.VERIFICATE_EMAIL.TITLE" />
        <ContentContainer>
          <Content tid="AUTH.VERIFICATE_EMAIL.CONTENT_BEFORE" />
          <Email tid={email} />
          <Content tid="AUTH.VERIFICATE_EMAIL.CONTENT_AFTER" />
        </ContentContainer>
      </IndentLayout>
      <ContentLayout type="small">
        <IndentLayout type="small">
          <ButtonSecondary
            tid="AUTH.VERIFICATE_EMAIL.RESEND"
            onClick={onResend}
            disabled={isPending}
          />
          <div>
            <TextSecondary tid="AUTH.VERIFICATE_EMAIL.CODE_DIDNT_ARRIVED" />
            &nbsp;
            <LinkPrimary
              path={AUTH_VERIFICATE_EMAIL_HELP_ROUTE}
              tid="AUTH.VERIFICATE_EMAIL.HELP"
            />
          </div>
        </IndentLayout>
      </ContentLayout>
    </Container>
  );
}

const ContentContainer = styled.div`
  line-height: 1.5;
`;

const Container = styled(IndentLayout)`
  justify-items: center;
  text-align: center;
`;

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;

const Content = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
`;

const Email = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
