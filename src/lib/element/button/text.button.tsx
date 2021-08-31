import styled, { css } from 'styled-components';

import { text } from '../../common/text';
import { THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { ButtonPropsType } from './button.type';

export function TextButton(props: ButtonPropsType) {
  const { tid, tvalue, width = undefined, ...rest } = props;

  return (
    <Button width={width} {...rest}>
      {text(tid, tvalue)}
    </Button>
  );
}

const Button = styled.button<any>`
  width: ${(p: { width: false | number }) => p.width + 'px' || '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  color: ${THEME_COLOR.SECONDARY_DARK};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};

  ${(props) =>
    props.disabled
      ? css`
          opacity: ${THEME_VALUE.OPACITY.DISABLED};
        `
      : css`
          :hover {
            opacity: ${THEME_VALUE.OPACITY.HOVER};
          }
        `}
`;
