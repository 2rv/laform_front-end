import React from 'react';
import styled, { css } from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';

import { FieldPropsType, InputProps } from './field.type';

export function FieldPrimary(props: FieldPropsType) {
  const {
    className,

    titleTid,
    placeholderTid,

    name,
    type,
    value,
    error,

    onChange,
    onBlur,
  } = props;

  return (
    <FieldContainer>
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
      {error && <ErrorField errorTid={error} />}
    </FieldContainer>
  );
}

const FieldContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Input = styled.input<InputProps>`
  padding: ${spacing(3)};
  color: ${THEME_COLOR.TEXT.DEFAULT};
  background: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  transition-property: border;
  transition-duration: ${THEME_VALUE.TRANSITION.HOVER};

  border: ${(props) =>
    props.error ? `1px solid ${THEME_COLOR.DANGER}` : '1px solid transparent'};

  &:focus {
    border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }

  &:-webkit-autofill {
    border: ${(props) =>
      props.error
        ? `1px solid ${THEME_COLOR.DANGER}`
        : '1px solid transparent'};
  }
  &:-webkit-autofill:hover {
    border: ${(props) =>
      props.error
        ? `1px solid ${THEME_COLOR.DANGER}`
        : '1px solid transparent'};
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  &:-webkit-autofill:focus {
    border: 1px solid #b5b5b5;
    opacity: 1;
  }
`;
