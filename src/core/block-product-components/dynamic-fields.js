import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../lib/theme';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from '../../lib/element/button';
import { BasicField, FieldSelect } from '../../lib/element/field';
import { FieldLayout, SectionLayout } from '../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../asset/svg/remove.svg';
import { TitlePrimary } from '../../lib/element/title';
import { numberValue } from '../../lib/common/create-product-helpers';
import React from 'react';

export function DynamicFields(props) {
  const {
    nameFieldArray,
    namePosition,
    initialData,
    pricePosition,
    title,
    fieldTitle,
    fieldPlaceholder,
    errors,
    touched,
    setFieldValue,
    values,
    buttonText,
  } = props;

  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const getFieldError = (name, index) =>
    errors?.[nameFieldArray]?.[index]?.[name] &&
    touched?.[nameFieldArray]?.[index]?.[name] &&
    errors?.[nameFieldArray]?.[index]?.[name];

  return (
    <SectionLayout type="SMALL">
      <Title tid={title} />
      <FieldArray name={nameFieldArray}>
        {({ remove, push }) => (
          <FieldLayout type="double" adaptive>
            {values[nameFieldArray].map((_, index) => (
              <React.Fragment key={index}>
                <Field name={`${nameFieldArray}.${index}.${namePosition}`}>
                  {({ field, form, meta }) => (
                    <BasicField
                      titleTid={fieldTitle}
                      placeholderTid={fieldPlaceholder}
                      error={getFieldError(namePosition, index)}
                      {...field}
                    />
                  )}
                </Field>
                <Line>
                  <Field name={`${nameFieldArray}.${index}.${pricePosition}`}>
                    {({ field, form, meta }) => (
                      <BasicField
                        titleTid="Цена"
                        placeholderTid="Введите цену (в руб.)"
                        error={getFieldError(pricePosition, index)}
                        name={field.name}
                        value={field.value}
                        onChange={setNumber(field.name)}
                        onBlur={field.onBlur}
                      />
                    )}
                  </Field>
                  {values[nameFieldArray].length !== 1 && (
                    <Button onClick={() => remove(index)}>
                      <RemoveIcon />
                    </Button>
                  )}
                </Line>
              </React.Fragment>
            ))}
            <ButtonSecondary
              tid={buttonText}
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
  margin-top: ${spacing(4)};
`;
