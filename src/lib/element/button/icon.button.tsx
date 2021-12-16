import styled from 'styled-components';
import { ButtonBasic } from './basic.button';
import { ButtonPropsType } from './button.type';
import { spacing } from '../../theme';

export function IconButton(props: ButtonPropsType) {
  return <Button {...props} />;
}

const Button = styled(ButtonBasic)`
  width: 46px;
  min-width: 46px;
  gap: ${spacing(3)};
`;
