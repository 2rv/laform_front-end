import styled from 'styled-components';
import { ButtonBasic } from './basic.button';
import { ButtonPropsType } from './button.type';
import { THEME_COLOR } from '../../theme';

export function ButtonSecondary(props: ButtonPropsType) {
  return <Button {...props} />;
}

const Button = styled(ButtonBasic)`
  background-color: ${THEME_COLOR.SECONDARY_DARK};
  color: ${THEME_COLOR.WHITE};
`;
