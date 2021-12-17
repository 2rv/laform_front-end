import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { text } from '../../common/text';
import { TextSecondary } from '../text';
import { ErrorField } from '../error';
import { TextareaFieldProps } from './field.type';

export const TextareaField = React.forwardRef(TextareaClean);

function TextareaClean(props: TextareaFieldProps, ref: any) {
  const {
    titleTid,
    placeholderTid,
    onChange,
    onBlur,
    error,
    children,
    minHeight = 46,
    maxHeight = 500,
    rows = 1,
    ...restProps
  } = props;
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight + 3}px`;
    if (typeof onChange === 'function') {
      onChange(e);
    }
  };
  return (
    <Container>
      {titleTid && <Title tid={titleTid} />}
      <Textarea
        ref={ref}
        onChange={handleChange}
        placeholder={placeholderTid && text(placeholderTid)}
        onBlur={onBlur}
        error={!!error}
        minHeight={minHeight}
        maxHeight={maxHeight}
        rows={rows}
        {...restProps}
      />
      {children}
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(1)};
`;
const Textarea = styled.textarea<{
  error: boolean;
  maxHeight?: number;
  minHeight?: number;
}>`
  padding: ${spacing(2)} ${spacing(3)};
  min-height: ${(p) => p.minHeight}px;
  max-height: ${(p) => p.maxHeight}px;
  width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  resize: none;
  line-height: 1.5;
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.SECONDARY_DARK};
  background: ${(p) => (p.error ? THEME_COLOR.WHITE : THEME_COLOR.GRAY)};
  border: 1px solid;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  border-color: ${(p) => (p.error ? THEME_COLOR.TEXT.DANGER : 'transparent')};

  ::placeholder {
    color: ${THEME_COLOR.TEXT.LIGHT};
  }
  &:focus {
    border-color: #b5b5b5;
    opacity: 1;
  }
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
`;
