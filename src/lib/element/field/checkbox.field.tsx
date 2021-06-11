import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { IndentLayout } from '../layout';
import { TextSecondary } from '../text';

import { CheckboxPropsType } from './field.type';

export function FieldCheckbox(props: CheckboxPropsType) {
  const { titleTid, labelTid, name, checked, onChange, onBlur } = props;
  const [isChecked, setChecked] = useState(checked);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked);

    onChange(e);
    onBlur(e);
  };

  return (
    <IndentLayout type="text_small">
      {titleTid && <Title tid={titleTid} />}
      <InputContainer htmlFor={name}>
        <Input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={onInputChange}
        />
        <Checkmark checked={isChecked} />
        <Title tid={labelTid} />
      </InputContainer>
    </IndentLayout>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  padding: ${spacing(2)} ${spacing(3)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.FIELD.CHECKBOX};
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
`;

const Checkmark = styled.span<{ checked: boolean }>`
  height: 24px;
  width: 24px;
  background-color: ${THEME_COLOR.LIGHT_GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  transition: ${THEME_VALUE.TRANSITION.CHECK};

  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 6px;

  ${(p) =>
    p.checked &&
    css`
      background-color: ${THEME_COLOR.SECONDARY_DARK};
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.795 1.06441C13.5216 0.791029 13.0784 0.791029 12.805 1.06441L4.4186 9.45093L1.19499 6.22732C0.921635 5.95394 0.478447 5.95397 0.205037 6.22732C-0.0683457 6.50068 -0.0683457 6.94387 0.205037 7.21725L3.92362 10.9358C4.1969 11.2091 4.64041 11.2089 4.91358 10.9358L13.795 2.05437C14.0684 1.78101 14.0683 1.33779 13.795 1.06441Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A");
    `}
`;
