import styled from 'styled-components';

import { ReactComponent as ErrorIcon } from '../../../asset/svg/error-outline.svg';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../lib/theme';
import { TextPrimary } from '../text';

import { SuccessPropsType } from './success.type';

export function SuccessRequest(props: SuccessPropsType) {
  const { tid, tvalue } = props;

  return (
    <Container>
      <Text tid={tid} tvalue={tvalue} />
      <IconContainer>
        <SuccessIcon />
      </IconContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  padding: ${spacing(2)} ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: lightgreen;
  line-height: 1.25em;
  white-space: nowrap;
`;

const Text = styled(TextPrimary)`
  color: darkgreen;
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SuccessIcon = styled(ErrorIcon)`
  & > path {
    fill: darkgreen;
  }
`;
