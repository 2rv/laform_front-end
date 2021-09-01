import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';
import { FilefieldPropsType } from './field.type';

export function FileField(props: FilefieldPropsType) {
  const {
    width,
    adaptive,

    titleTid,
    placeholderTid,
    name,
    value,
    error,
    disabled,

    onChange,
    onBlur,
  } = props;

  return (
    <Container width={width} adaptive={adaptive}>
      {titleTid && <Title tid={titleTid} />}
      <Content error={!!error}>
        {placeholderTid && <Text tid={placeholderTid} />}
        <Input
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          type="file"
        />
      </Content>
      {value && <Light tid={value.name} />}
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}
const Light = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.LIGHT};
`;
const Text = styled(TextSecondary)`
  color: ${THEME_COLOR.WHITE};
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
const Content = styled.label<any>`
  display: flex;
  align-items: center;
  height: 46px;
  width: inherit;
  justify-content: center;
  padding: 0 ${spacing(4)};
  background-color: ${THEME_COLOR.SECONDARY_DARK};
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

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Input = styled.input<any>`
  display: none;
`;