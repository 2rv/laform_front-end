import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckmarkIcon } from '../../../asset/svg/check-mark.svg';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { TextSecondary } from '../text';

import { CheckboxPropsType } from './field.type';

export function FieldCheckbox(props: CheckboxPropsType) {
  const { titleTid, labelTid, name, checked, onChange, onBlur } = props;
  const [isChecked, setChecked] = useState(!!checked);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked);

    onChange?.(e);
    onBlur?.(e);
  };

  return (
    <Indent>
      {titleTid && <Title tid={titleTid} />}
      <InputContainer htmlFor={name}>
        <Input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={onInputChange}
        />
        <CheckmarkContainer checked={isChecked}>
          <Checkmark />
        </CheckmarkContainer>
        <Title tid={labelTid} />
      </InputContainer>
    </Indent>
  );
}

const Indent = styled.div`
  padding: ${spacing(1)};
`;

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  padding: ${spacing(2)} ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
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

// const Checkmark = styled(CheckmarkIcon)<{ checked: boolean }>`
//   transition-property: color;
//   transition-duration: ${THEME_VALUE.TRANSITION.FAST};
// `;
