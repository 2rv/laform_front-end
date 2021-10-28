import { Field } from 'formik';
import styled from 'styled-components';
import { TextSecondary } from '../text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { ComplexityFieldProps } from './field.type';

export function ComplexityField(props: ComplexityFieldProps) {
  const { title, name, value, onChange } = props;

  return (
    <Complexity>
      <SmallTitle tid={title} />
      <FieldComplexity>
        {[1, 2, 3, 4, 5].map((rate, index) => (
          <ComplexityDot key={index} active={rate <= value}>
            <FieldRadio
              type="radio"
              name={name}
              value={rate}
              onChange={onChange}
            />
          </ComplexityDot>
        ))}
      </FieldComplexity>
    </Complexity>
  );
}
const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Complexity = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const FieldComplexity = styled.div`
  display: flex;
  padding: ${spacing(3)};
  gap: ${spacing(1)};
  background-color: ${THEME_COLOR.GRAY};
  height: 46px;
  align-items: center;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const FieldRadio = styled(Field)`
  display: none;
`;
const ComplexityDot = styled.label<{ active: boolean }>`
  width: 16px;
  min-width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.active ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
