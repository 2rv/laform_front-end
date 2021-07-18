import styled from 'styled-components';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import { ContentLayout, IndentLayout } from '../../../../lib/element/layout';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { ErrorAlert } from '../../../../lib/element/alert';
import { TextSecondary } from '../../../../lib/element/text';
import { THEME_SIZE } from '../../../../lib/theme';

export function AuthVerificateEmailConfirmComponent(props) {
  const { onButtonClick, isPending, isSuccess, isError, errorMessage } = props;
  return (
    <Container type="small">
      <IndentLayout type="text">
        <Title tid="AUTH.VERIFICATE_EMAIL_CONFIRM.TITLE" />
        <Content tid="AUTH.VERIFICATE_EMAIL_CONFIRM.CONTENT" />
      </IndentLayout>
      <ContentLayout type="small">
        <IndentLayout type="small">
          <ButtonPrimary
            tid="AUTH.VERIFICATE_EMAIL_CONFIRM.GO_TO_PURCHASES"
            onClick={onButtonClick}
            disabled={!isSuccess}
          />
          {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
          {isPending && <LoaderPrimary />}
        </IndentLayout>
      </ContentLayout>
    </Container>
  );
}

const Container = styled(IndentLayout)`
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
