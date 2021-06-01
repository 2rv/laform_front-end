import styled from 'styled-components';

import { THEME_COLOR } from '../../theme';

import { ButtonBasic } from './basic.button';
import { ButtonPropsType } from './button.type';

export function ButtonPrimary(props: ButtonPropsType) {
  return <Button {...props} />;
}

const Button = styled(ButtonBasic)`
  background-color: ${THEME_COLOR.PRIMARY};
  color: ${THEME_COLOR.TEXT.WHITE};
`;
