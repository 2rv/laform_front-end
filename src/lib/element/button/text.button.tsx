import styled from 'styled-components';
import { text } from '../../common/text';
import { ButtonPropsType } from './button.type';
import { ButtonBasic } from './basic.button';

export function TextButton(props: ButtonPropsType) {
  const { tid, tvalue, ...rest } = props;

  return <Button {...rest}>{text(tid, tvalue)}</Button>;
}

const Button = styled(ButtonBasic)`
  background-color: transparent;
  border-radius: 0px;
  height: fit-content;
`;
