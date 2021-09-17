import styled, { css } from 'styled-components';
import { ReactComponent as CheckmarkIcon } from '../../../asset/svg/check-mark.svg';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { TextSecondary } from '../text';

import { CheckboxPropsType } from './field.type';

export function FieldCheckbox(props: CheckboxPropsType) {
  const { titleTid, labelTid, name, checked, onClick, width, adaptive } = props;

  return (
    <Container width={width} adaptive={adaptive}>
      {titleTid && <Title tid={titleTid} />}
      <Content htmlFor={name} onClick={onClick}>
        <Input
          type="checkbox"
          onChange={() => null}
          name={name}
          checked={checked}
        />
        <CheckmarkContainer checked={checked}>
          <Checkmark />
        </CheckmarkContainer>
        <Title tid={labelTid} />
      </Content>
    </Container>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Container = styled.div<{
  adaptive?: boolean;
  width?: number;
}>`
  display: flex;
  flex-direction: column;
  width: ${(p) => {
    if (p.width) return p.width + 'px';
    return '100%';
  }};
  ${(p) => {
    return (
      p.adaptive &&
      css`
        @media screen and (max-width: 720px) {
          width: 100%;
        }
      `
    );
  }}
  gap: ${spacing(1)};
`;
const Content = styled.label`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  padding: ${spacing(2)} ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  cursor: pointer;
  height: 46px;
  user-select: none;
`;
const Input = styled.input`
  display: none;
`;
const CheckmarkContainer = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: transparent;
  background-color: ${THEME_COLOR.LIGHT_GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  transition-property: background-color, color;
  transition-duration: ${THEME_VALUE.TRANSITION.FAST};

  ${(p) =>
    p.checked &&
    css`
      color: ${THEME_COLOR.GRAY};
      background-color: ${THEME_COLOR.SECONDARY_DARK};
    `}
`;
const Checkmark = styled(CheckmarkIcon)`
  fill: currentColor;
`;
