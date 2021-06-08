import styled from 'styled-components';

import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { FieldPrimary } from '../../../../lib/element/field';
import { TextPrimary } from '../../../../lib/element/text';
import { ButtonPrimary } from '../../../../lib/element/button';

export function AuthFormChangePasswordComponent(props) {
  return (
    <Container>
      <Title tid="AUTH_FORM_CHANGE_PASSWORD.TITLE" />
      <FieldContainer>
        <FieldPrimary
          titleTid="AUTH_FORM_CHANGE_PASSWORD.OLD_PASSWORD"
          placeholderTid="AUTH_FORM_CHANGE_PASSWORD.P_OLD_PASSWORD"
        />
        <FieldPrimary
          titleTid="AUTH_FORM_CHANGE_PASSWORD.NEW_PASSWORD"
          placeholderTid="AUTH_FORM_CHANGE_PASSWORD.P_NEW_PASSWORD"
        />
        <FieldPrimary
          titleTid="AUTH_FORM_CHANGE_PASSWORD.REPEAT_NEW_PASSWORD"
          placeholderTid="AUTH_FORM_CHANGE_PASSWORD.P_REPEAT_NEW_PASSWORD"
        />
      </FieldContainer>
      <ButtonPrimary tid="AUTH_FORM_CHANGE_PASSWORD.SUBMIT" />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;

const Title = styled(TextPrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
