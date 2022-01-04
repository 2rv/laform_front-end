import React from 'react';
import styled, { css } from 'styled-components';
import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';
import { BasicFieldProps } from './field.type';

export function BasicField(props: BasicFieldProps) {
  const {
    titleTid,
    placeholderTid,
    error,
    type = 'text',
    className,
    ...restProps
  } = props;

  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <Input
        className={className}
        placeholder={placeholderTid && text(placeholderTid)}
        type={type}
        error={!!error}
        {...restProps}
      />
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(1)};
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Input = styled.input<{ error: boolean }>`
  display: flex;
  align-items: center;
  height: 46px;
  width: inherit;
  justify-content: center;
  align-items: center;
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  padding: 0 ${spacing(3)};

  color: ${THEME_COLOR.SECONDARY_DARK};
  background-color: ${THEME_COLOR.GRAY};
  font-size: ${THEME_SIZE.FONT.SMALL};
  transition: ${THEME_VALUE.TRANSITION.HOVER};

  border: 1px solid transparent;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};

  ${(p) => {
    return (
      p.error &&
      css`
        border-color: ${THEME_COLOR.TEXT.DANGER};
      `
    );
  }}
  :focus {
    border-color: ${THEME_COLOR.LIGHT_GRAY};
  }
  :hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  ::placeholder {
    color: ${THEME_COLOR.TEXT.LIGHT};
  }
`;
