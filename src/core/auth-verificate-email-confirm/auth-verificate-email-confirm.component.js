import styled from 'styled-components';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary } from 'src/lib/element/button';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert } from 'src/lib/element/alert';
import { TextSecondary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import {
  ContentLayout,
  SectionLayout,
  PageLayout,
} from 'src/lib/element/layout';

export function AuthVerificateEmailConfirmComponent(props) {
  const { onButtonClick, isPending, isSuccess, isError, errorMessage } = props;
  return (
    <ContentLayout horizontal="center" vertical="center">
      <PageLayout type="MEDIUM">
        <Container type="SMALL">
          <SectionLayout type="TEXT">
            <Title tid="AUTH.VERIFICATE_EMAIL_CONFIRM.TITLE" />
            <Content tid="AUTH.VERIFICATE_EMAIL_CONFIRM.CONTENT" />
          </SectionLayout>
          <ContentLayout type="SMALL">
            <SectionLayout type="SMALL">
              <ButtonPrimary
                tid="AUTH.VERIFICATE_EMAIL_CONFIRM.GO_TO_PURCHASES"
                onClick={onButtonClick}
                disabled={!isSuccess}
              />
              {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
              {isPending && <LoaderPrimary />}
            </SectionLayout>
          </ContentLayout>
        </Container>
      </PageLayout>
    </ContentLayout>
  );
}

const Container = styled(SectionLayout)`
  justify-items: center;
  text-align: center;
`;

const Title = styled(TitlePrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;

const Content = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5em;
`;
