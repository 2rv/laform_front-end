import styled from 'styled-components';

import { ReactComponent as SuccessIcon } from '../../../asset/svg/success.svg';
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
  background-color: ${THEME_COLOR.BACKGROUND.SUCCESS};
  line-height: 1.25em;
  white-space: nowrap;
`;

const Text = styled(TextPrimary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
