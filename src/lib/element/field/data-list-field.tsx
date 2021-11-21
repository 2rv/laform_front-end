import React from 'react';
import styled, { css } from 'styled-components';
import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';
import { DataListFieldProps, InputPropsType } from './field.type';

export function DataListField(props: DataListFieldProps) {
  const {
    titleTid,
    placeholderTid,
    name,
    value,
    error,
    onChange,
    onBlur,
    hints,
  } = props;

  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <Input
        list={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
        type="text"
        error={!!error}
      />
      {error && <ErrorField errorTid={error} />}
      <datalist id={name}>
        {hints.map((item: any, key: number) => (
          <option value={item.value} key={key} />
        ))}
      </datalist>
    </Container>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
  width: 100%;
`;
const Input = styled.input<InputPropsType>`
  height: 46px;
  width: 100%;
  padding: ${spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  color: ${THEME_COLOR.SECONDARY_DARK};
  ::placeholder {
    color: ${THEME_COLOR.TEXT.LIGHT};
  }
  background-color: ${THEME_COLOR.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-size: ${THEME_SIZE.FONT.SMALL};
  transition: ${THEME_VALUE.TRANSITION.HOVER};
  border: 1px solid transparent;

  ${(p) =>
    p.error &&
    css`
      border-color: ${THEME_COLOR.TEXT.DANGER};
    `}

  :focus {
    border-color: ${THEME_COLOR.LIGHT_GRAY};
  }
  :hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
