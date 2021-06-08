import styled from 'styled-components';

import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { ContentLayout, IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { THEME_SIZE } from '../../../../lib/theme';

export function AuthVerificateEmailComponent(props) {
  return (
    <Container type="small">
      <IndentLayout type="text">
        <Title tid="AUTH.VERIFICATE_EMAIL.TITLE" />
        <Content
          tid="AUTH.VERIFICATE_EMAIL.CONTENT"
          tvalue={{ email: 'example@email.com' }}
        />
      </IndentLayout>
      <ContentLayout type="small">
        <IndentLayout type="small">
          <ButtonSecondary tid="AUTH.VERIFICATE_EMAIL.RESEND" />
          <div>
            <TextSecondary tid="AUTH.VERIFICATE_EMAIL.CODE_DIDNT_ARRIVED" />
            &nbsp;
            <LinkPrimary tid="AUTH.VERIFICATE_EMAIL.HELP" />
          </div>
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
