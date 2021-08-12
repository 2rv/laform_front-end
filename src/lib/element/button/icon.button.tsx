import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { IconButtonPropsType } from './button.type';

export function IconButton(props: IconButtonPropsType) {
  const { children, width = 46, auto = false, ...rest } = props;

  return (
    <Button width={width} auto={auto} {...rest}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: ${(p: { width: number; auto: boolean }) => {
    if (p.auto) return 'auto';
    return p.width + 'px';
  }};
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
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
