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
import React from 'react';
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
      <Title tid="Размеры" />
      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value, index) => (
              <FieldLayout type="double" adaptive key={index}>
                <BasicField
                  titleTid="Название размера"
                  placeholderTid="Введите название размера"
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
                    titleTid="Цена"
                    placeholderTid="Введите цену (в руб.)"
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
                <BasicField
                  titleTid="Количество товара (единиц)"
                  placeholderTid="Введите количество товара"
                  name={`${fieldArrayName}.${index}.${SEWING_GOODS_FIELD_NAME.COUNT}`}
                  onBlur={handleBlur}
                  touched={touched}
                  value={value[SEWING_GOODS_FIELD_NAME.COUNT]}
                  error={getFieldError(SEWING_GOODS_FIELD_NAME.COUNT, index)}
                  onChange={setNumber(SEWING_GOODS_FIELD_NAME.COUNT, index)}
                />
              </FieldLayout>
            ))}
            <ButtonSecondary
              tid="Добавить размер"
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
