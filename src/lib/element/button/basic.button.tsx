import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { ButtonPropsType } from './button.type';

export function ButtonBasic(props: ButtonPropsType) {
  const { tid, tvalue, icon: Icon, ...rest } = props;

  return (
    <Button {...rest}>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
      {tid ? text(tid, tvalue) : props.children}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing(3)};
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
  color: ${THEME_COLOR.SECONDARY_DARK};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
`;

const IconContainer = styled.span`
  margin-right: ${spacing(2)};
`;
