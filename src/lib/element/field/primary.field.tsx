import React from 'react';
import styled from 'styled-components';

import { text } from '../../common/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../theme';
import { TextSecondary } from '../text';

import { FieldPropsType } from './field.type';

export function FieldPrimary(props: FieldPropsType) {
  const { titleTid, placeholderTid, onChange, onBlur, value, name, error } =
    props;

  return (
    <Container>
      <TextSecondary tid={titleTid} fontSize={THEME_SIZE.FONT.SMALL} />
      <Input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
      />
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: ${spacing(1)};
`;

const Input = styled.input`
  padding: ${spacing(3)};
  color: ${THEME_COLOR.FIELD_PRIMARY};
  background: ${THEME_COLOR.BACKGROUND_GRAY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};

  :focus {
    border: 1px solid ${THEME_COLOR.FIELD_STROKE_PRIMARY};
  }
`;

// const ErrorMessage = styled.span`
//   color: ${THEME_COLOR.TEXT_DANGER};
//   font-size: ${THEME_SIZE.FONT.SMALL};
// `;
