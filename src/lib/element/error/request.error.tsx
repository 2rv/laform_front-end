import styled from 'styled-components';

import { ReactComponent as ErrorIcon } from '../../../asset/svg/error-outline.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { TextDanger } from '../text';

import { ErrorRequestPropsType } from './error.type';

export function ErrorRequest(props: ErrorRequestPropsType) {
  const { tid, tvalue } = props;

  return (
    <Container>
      <TextDanger
        tid={`ERROR.${tid}`}
        tvalue={tvalue}
        fontSize={THEME_SIZE.FONT.SMALL}
      />
      <IconContainer>
        <ErrorIcon />
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacing(2)} ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.BACKGROUND_DANGER};
  line-height: 1.25em;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
