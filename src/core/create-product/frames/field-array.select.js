import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { BasicField, FieldSelect } from '../../../lib/element/field';
import { ButtonSecondary, IconButton } from '../../../lib/element/button';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { spacing } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TextSecondary } from '../../../lib/element/text';
import { THEME_SIZE } from '../../../lib/theme';

export function FieldArraySelect(props) {
  const {
    title,
    options,
    nameSelect,
    nameFieldArray,
    handleBlur,
    values,
    initialData,
    setFieldValue,
  } = props;

  const numberValue = (name) => (e) =>
    setFieldValue(name, Number(e.currentTarget.value));

  return (
    <SectionLayout type="TEXT">
      <SmallTitle tid={title} />
      <FieldArray name={nameFieldArray}>
        {({ remove, push }) => (
          <FieldLayout type="double" adaptive>
            {values[nameFieldArray].map((_, index) => (
              <Line key={index}>
                <FieldSelect
                  name={`${nameFieldArray}.${index}.${nameSelect}`}
                  value={values[nameFieldArray][index][nameSelect]}
                  options={options}
                  onBlur={handleBlur}
                  onChange={numberValue(
                    `${nameFieldArray}.${index}.${nameSelect}`,
                  )}
                />
                {values[nameFieldArray].length !== 1 && (
                  <IconButton type="button" onClick={() => remove(index)}>
                    <RemoveIcon />
                  </IconButton>
                )}
              </Line>
            ))}
            <ButtonSecondary
              tid="Добавить категорию"
              type="button"
              onClick={() => push(initialData[nameFieldArray])}
            />
          </FieldLayout>
        )}
      </FieldArray>
    </SectionLayout>
  );
}

const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
