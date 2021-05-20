import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { ButtonPropsType } from './button.type';

export function ButtonBasic(props: ButtonPropsType) {
  const { tid, tvalue, iconSrc, ...rest } = props;

  return (
    <Button {...rest}>
      {iconSrc && <Icon src={iconSrc} />}
      {tid ? text(tid, tvalue) : props.children}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing(3)};
  background-color: ${THEME_COLOR.BACKGROUND_GRAY};
  color: ${THEME_COLOR.TEXT_PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  font-weight: 500;
`;

const Icon = styled.img`
  margin-right: ${spacing(2)};
`;
