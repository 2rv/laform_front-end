import styled from 'styled-components';
import { FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import { ButtonSecondary, IconButton } from '../../../lib/element/button';
import { BasicField } from '../../../lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { TitlePrimary } from '../../../lib/element/title';
import { SEWING_GOODS_FIELD_NAME } from '../sewing-goods-create.type';

export function DynamicField(props) {
  const { handleChange, handleBlur, initialData, errors, touched, values } =
    props;

  const nameFieldArray = SEWING_GOODS_FIELD_NAME.COLORS;

  const getFieldError = (name, index) =>
    errors?.[nameFieldArray]?.[index]?.[name] &&
    touched?.[nameFieldArray]?.[index]?.[name] &&
    errors?.[nameFieldArray]?.[index]?.[name];

  return (
    <SectionLayout type="SMALL">
      <Title tid="DYNAMIC_FIELDS.COLOR.TITLE" />
      <FieldArray name={nameFieldArray}>
        {({ remove, push }) => (
          <FieldLayout type="double" adaptive>
            {values[nameFieldArray].map((value, index) => (
              <Line key={index}>
                <BasicField
                  name={`${nameFieldArray}.${index}.${SEWING_GOODS_FIELD_NAME.COLOR_NAME}`}
                  titleTid="DYNAMIC_FIELDS.COLOR.FIELD_TITLE"
                  placeholderTid="DYNAMIC_FIELDS.COLOR.FIELD_PLACEHOLDER"
                  error={getFieldError(
                    SEWING_GOODS_FIELD_NAME.COLOR_NAME,
                    index,
                  )}
                  value={value[SEWING_GOODS_FIELD_NAME.COLOR_NAME]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched}
                />
                {values[nameFieldArray].length !== 1 && (
                  <Button onClick={() => remove(index)}>
                    <RemoveIcon />
                  </Button>
                )}
              </Line>
            ))}
            <SecondaryButton
              tid="DYNAMIC_FIELDS.COLOR.BUTTON_TEXT"
              onClick={() => push(initialData)}
            />
          </FieldLayout>
        )}
      </FieldArray>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
const SecondaryButton = styled(ButtonSecondary)`
  margin-top: 19px;
`;
