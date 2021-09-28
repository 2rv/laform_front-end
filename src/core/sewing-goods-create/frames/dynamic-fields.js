import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from '../../../lib/element/button';
import { BasicField, FieldSelect } from '../../../lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { TitlePrimary } from '../../../lib/element/title';
import { numberValue } from '../../../lib/common/create-product-helpers';
import { SEWING_GOODS_FIELD_NAME } from '../sewing-goods-create.type';

export function DynamicFields(props) {
  const {
    initialData,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = props;

  const fieldArrayName = SEWING_GOODS_FIELD_NAME.SIZES;

  const setNumber = (name, index) => (e) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  const getFieldError = (name, index) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  return (
    <SectionLayout type="SMALL">
      <Title tid="DYNAMIC_FIELDS.SIZE.TITLE" />
      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value, index) => (
              <FieldLayout type="double" adaptive key={index}>
                <BasicField
                  titleTid="DYNAMIC_FIELDS.SIZE.FIELD_TITLE"
                  placeholderTid="DYNAMIC_FIELDS.SIZE.FIELD_PLACEHOLDER"
                  name={`${fieldArrayName}.${index}.${SEWING_GOODS_FIELD_NAME.SIZE_NAME}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched}
                  error={getFieldError(
                    SEWING_GOODS_FIELD_NAME.SIZE_NAME,
                    index,
                  )}
                  value={value[SEWING_GOODS_FIELD_NAME.SIZE_NAME]}
                />
                <Line>
                  <BasicField
                    titleTid="DYNAMIC_FIELDS.PRICE.TITLE"
                    placeholderTid="DYNAMIC_FIELDS.PRICE.PLACEHOLDER"
                    name={`${fieldArrayName}.${index}.${SEWING_GOODS_FIELD_NAME.SIZE_PRICE}`}
                    onBlur={handleBlur}
                    touched={touched}
                    error={getFieldError(
                      SEWING_GOODS_FIELD_NAME.SIZE_PRICE,
                      index,
                    )}
                    value={value[SEWING_GOODS_FIELD_NAME.SIZE_PRICE]}
                    onChange={setNumber(
                      SEWING_GOODS_FIELD_NAME.SIZE_PRICE,
                      index,
                    )}
                  />

                  {values[fieldArrayName].length !== 1 && (
                    <Button onClick={() => remove(index)}>
                      <RemoveIcon />
                    </Button>
                  )}
                </Line>
              </FieldLayout>
            ))}
            <ButtonSecondary
              tid="DYNAMIC_FIELDS.SIZE.BUTTON_TEXT"
              onClick={() => push(initialData)}
            />
          </SectionLayout>
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
