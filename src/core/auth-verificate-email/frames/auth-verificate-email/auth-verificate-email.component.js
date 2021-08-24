import styled from 'styled-components';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import {
  ContentLayout,
  PageLayout,
  SectionLayout,
} from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { AUTH_VERIFICATE_EMAIL_HELP_ROUTE } from '../../auth-verificate-email.constant';

export function AuthVerificateEmailComponent(props) {
  const { email, onResend, isPending } = props;

  return (
    <ContentLayout vertical="center" horizontal="center">
      <PageLayout type="MEDIUM">
        <Container type="SMALL">
          <SectionLayout type="TEXT">
            <Title tid="AUTH.VERIFICATE_EMAIL.TITLE" />
            <ContentContainer>
              <Content tid="AUTH.VERIFICATE_EMAIL.CONTENT_BEFORE" />
              <Email tid={email} />
              <Content tid="AUTH.VERIFICATE_EMAIL.CONTENT_AFTER" />
            </ContentContainer>
          </SectionLayout>
          <ContentLayout type="SMALL">
            <SectionLayout type="SMALL">
              <ButtonSecondary
                tid="AUTH.VERIFICATE_EMAIL.RESEND"
                onClick={onResend}
                disabled={isPending}
                width={360}
              />
              <div>
                <LightText tid="AUTH.VERIFICATE_EMAIL.CODE_DIDNT_ARRIVED" />
                &nbsp;
                <LinkPrimary
                  path={AUTH_VERIFICATE_EMAIL_HELP_ROUTE}
                  tid="AUTH.VERIFICATE_EMAIL.HELP"
                />
              </div>
            </SectionLayout>
          </ContentLayout>
        </Container>
      </PageLayout>
    </ContentLayout>
  );
}

const ContentContainer = styled.div`
  line-height: 1.5;
`;

const Container = styled(SectionLayout)`
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
const LightText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
