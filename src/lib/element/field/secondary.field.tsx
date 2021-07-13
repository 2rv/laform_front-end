import React from 'react';
import styled, { css } from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';
import { ButtonBasic } from '../button';
import { FieldPropsType, InputProps } from './field.type';

export function FieldSecondary(props: FieldPropsType) {
  const {
    className,

    titleTid,
    placeholderTid,
    icon,
    onClick,
    name,
    type,
    value,
    error,

    onChange,
    onBlur,
  } = props;

  return (
    <Container>
      <InputContainer>
        {titleTid && <Title tid={titleTid} />}
        <Input
          className={className}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          placeholder={text(placeholderTid)}
          type={type || 'text'}
          error={!!error}
        />
        <IconButton onClick={onClick} icon={icon} />
      </InputContainer>
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}
const IconButton = styled(ButtonBasic)`
  position: absolute;
  right: ${spacing(1)};
  padding: ${spacing(2.9)}; // иначе будет border перекрываться
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const InputContainer = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  background-color: ${THEME_COLOR.BACKGROUND.GRAY};
`;

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Input = styled.input<InputProps>`
  padding: ${spacing(3)};
  color: ${THEME_COLOR.FIELD.TEXT_PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT} 0 0 0;
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  transition-property: border;
  transition-duration: ${THEME_VALUE.TRANSITION.HOVER};
  ${(p) =>
    p.error &&
    css`
      border: 1px solid ${THEME_COLOR.DANGER};
    `}
  :focus {
    border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
  }
`;
