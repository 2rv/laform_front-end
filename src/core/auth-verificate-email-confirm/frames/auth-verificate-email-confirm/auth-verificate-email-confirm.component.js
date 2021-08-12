import styled from 'styled-components';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import {
  ContentLayout,
  SectionLayout,
  PageLayout,
} from '../../../../lib/element/layout';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { ErrorAlert } from '../../../../lib/element/alert';
import { TextSecondary } from '../../../../lib/element/text';
import { THEME_SIZE } from '../../../../lib/theme';

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
                width={360}
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
