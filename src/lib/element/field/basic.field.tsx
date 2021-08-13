import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as FindIcon } from 'src/asset/svg/find-icon.svg';
import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';
import { FieldPropsType, InputPropsType } from './field.type';

export function BasicField(props: FieldPropsType) {
  const {
    className,
    width,

    titleTid,
    placeholderTid,
    name,
    type,
    value,
    error,

    onChange,
    onBlur,
    isFindInput,
  } = props;

  return (
    <Container width={width}>
      {titleTid && <Title tid={titleTid} />}
      <Content>
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
        {isFindInput && <Find />}
      </Content>
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(p: { width?: number }) => {
    if (p.width) return p.width + 'px';
    return '100%';
  }};
  gap: ${spacing(1)};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  width: inherit;
  position: relative;
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Find = styled(FindIcon)`
  position: absolute;
  right: ${spacing(3)};
`;

const Input = styled.input<InputPropsType>`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  padding: 0 ${spacing(7)} 0 ${spacing(3)};
  color: ${THEME_COLOR.TEXT.LIGHT};
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

/* мусорные стили
transition-property: border; 
:-webkit-autofill {
    border-color: ${(p) =>
    p.error &&
    css`
      border-color: ${THEME_COLOR.TEXT.DANGER};
    `};
  } 
:-webkit-autofill:hover {
    ${(p) =>
    p.error &&
    css`
      border-color: ${THEME_COLOR.TEXT.DANGER};
    `}
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  } 

:-webkit-autofill:focus {
    border-color:  ${THEME_COLOR.FIELD_FOCUS};
  } 
 */
