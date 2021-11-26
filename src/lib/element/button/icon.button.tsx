import styled from 'styled-components';
import { spacing } from '../../theme';
import { ButtonPropsType } from './button.type';
import { ButtonBasic } from './basic.button';

export function IconButton(props: ButtonPropsType) {
  const { children, ...rest } = props;

  return <Button {...rest}>{children}</Button>;
}

const Button = styled(ButtonBasic)`
  width: 46px;
  min-width: 46px;
  gap: ${spacing(3)};
`;
