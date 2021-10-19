import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import { ButtonSecondary, IconButton } from '../../../lib/element/button';
import { BasicField } from '../../../lib/element/field';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { TitlePrimary } from '../../../lib/element/title';
import { numberValue } from '../../../lib/common/create-product-helpers';
import { PRINT_PATTERN_FIELD_NAME } from '../patterns-create-print.type';
import { Divider } from 'src/lib/element/divider';
import React from 'react';

export function ProductOptions(props) {
  const {
    productOption,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = props;
  const fieldArrayName = PRINT_PATTERN_FIELD_NAME.OPTIONS;
  const optionSizeName = PRINT_PATTERN_FIELD_NAME.OPTION_SIZE;
  const optionPriceName = PRINT_PATTERN_FIELD_NAME.OPTION_PRICE;
  const optionDiscountName = PRINT_PATTERN_FIELD_NAME.OPTION_DISCOUNT;

  const getFieldError = (name, index) =>
    errors?.[fieldArrayName]?.[index]?.[name] &&
    touched?.[fieldArrayName]?.[index]?.[name] &&
    errors?.[fieldArrayName]?.[index]?.[name];

  const setNumber = (name, index) => (e) =>
    setFieldValue(`${fieldArrayName}.${index}.${name}`, numberValue(e));

  return (
    <SectionLayout type="SMALL">
      <Title tid="Параметры товара" />
      <FieldArray name={fieldArrayName}>
        {({ remove, push }) => (
          <SectionLayout type="SMALL">
            {values[fieldArrayName].map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <FieldLayout type="double" adaptive>
                    <BasicField
                      titleTid="Размер"
                      placeholderTid="Введите размер"
                      name={`${fieldArrayName}.${index}.${optionSizeName}`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched}
                      error={getFieldError(optionSizeName, index)}
                      value={value[optionSizeName]}
                    />
                    <Line>
                      <BasicField
                        titleTid="Цена"
                        placeholderTid="Введите цену (руб.)"
                        name={`${fieldArrayName}.${index}.${optionPriceName}`}
                        value={value[optionPriceName]}
                        error={getFieldError(optionPriceName, index)}
                        onChange={setNumber(optionPriceName, index)}
                        onBlur={handleBlur}
                        touched={touched}
                      />
                      {values[fieldArrayName].length !== 1 && (
                        <Button onClick={() => remove(index)}>
                          <RemoveIcon />
                        </Button>
                      )}
                    </Line>

                    <BasicField
                      titleTid="Введите скидку (%)"
                      placeholderTid="0"
                      name={`${fieldArrayName}.${index}.${optionDiscountName}`}
                      value={value[optionDiscountName]}
                      error={getFieldError(optionDiscountName, index)}
                      onChange={setNumber(optionDiscountName, index)}
                      onBlur={handleBlur}
                      touched={touched}
                    />
                  </FieldLayout>
                  {values[fieldArrayName].length !== 1 && <Divider />}
                </React.Fragment>
              );
            })}
            <ButtonSecondary
              tid="DYNAMIC_FIELDS.SIZE.BUTTON_TEXT"
              onClick={() => push(productOption)}
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
