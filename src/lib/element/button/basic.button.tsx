import styled, { css } from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';

import { ButtonPropsType } from './button.type';

export function ButtonBasic(props: ButtonPropsType) {
  const { tid, tvalue, width, children, ...rest } = props;
  return (
    <Button width={width} {...rest}>
      {tid ? text(tid, tvalue) : children}
    </Button>
  );
}

const Button = styled.button`
  width: ${(p: { width: false | number }) => p.width + 'px' || '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 ${spacing(3)};
  background-color: ${THEME_COLOR.GRAY};
  color: ${THEME_COLOR.SECONDARY_DARK};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
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
