import styled from 'styled-components';

import { THEME_COLOR, THEME_VALUE } from '../../theme';

import { ButtonBasic } from './basic.button';
import { ButtonPropsType } from './button.type';

export function ButtonSecondary(props: ButtonPropsType) {
  return <Button {...props} />;
}

const Button = styled(ButtonBasic)`
  background-color: ${THEME_COLOR.SECONDARY_DARK};
  color: ${THEME_COLOR.TEXT.WHITE};
  ${(props) =>
    props.disabled
      ? `background-color:${THEME_COLOR.DARK_GRAY}`
      : `&:hover {
          opacity: ${THEME_VALUE.OPACITY.HOVER};
        }`};
`;
