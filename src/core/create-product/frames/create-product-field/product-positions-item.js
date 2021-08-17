import { Field } from 'formik';
import { BasicField } from '../../../../lib/element/field';
import React from 'react';

export function ProductPositionsItem(props) {
  const {
    index,
    positionsFieldArray,
    positionNameFieldName,
    positionPriceFieldName,
    optionsFieldArray,
    optionsIndex,
  } = props;
  return (
    <>
      <Field
        name={`${optionsFieldArray}.${optionsIndex}.${positionsFieldArray}.${index}.${positionNameFieldName}`}
      >
        {({ field, form, meta }) => (
          <BasicField
            titleTid="Название позиции"
            placeholderTid="Введите название позиции"
            error={
              meta.touched && !meta.value && form.errors[positionNameFieldName]
            }
            {...field}
          />
        )}
      </Field>
      <Field
        name={`${optionsFieldArray}.${optionsIndex}.${positionsFieldArray}.${index}.${positionPriceFieldName}`}
      >
        {({ field, form, meta }) => (
          <BasicField
            titleTid="Цена"
            placeholderTid="Введите цену позиции"
            error={
              meta.touched && !meta.value && form.errors[positionPriceFieldName]
            }
            {...field}
          />
        )}
      </Field>
    </>
  );
}
