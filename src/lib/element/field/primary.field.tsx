import React from 'react';
import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { ErrorField } from '../error';
import { TextSecondary } from '../text';

import { FieldPropsType } from './field.type';

export function FieldPrimary(props: FieldPropsType) {
  const {
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
    <Container>
      <InputContainer>
        <Title tid={titleTid} />
        <Input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          placeholder={text(placeholderTid)}
          type={type || 'text'}
        />
      </InputContainer>
      {error && <ErrorField errorTid={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;

const InputContainer = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Input = styled.input`
  padding: ${spacing(3)};
  color: ${THEME_COLOR.FIELD.PRIMARY};
  background: ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};

  :focus {
    border: 1px solid ${THEME_COLOR.FIELD_STROKE.PRIMARY};
  }
`;
