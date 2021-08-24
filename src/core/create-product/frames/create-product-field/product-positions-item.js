import { Field } from 'formik';
import { BasicField } from '../../../../lib/element/field';
import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import { ReactComponent as RemoveIcon } from '../../../../asset/svg/remove.svg';
import { IconButton } from '../../../../lib/element/button';

export function ProductPositionsItem(props) {
  const {
    index,
    positionsFieldArray,
    positionNameFieldName,
    positionPriceFieldName,
    optionsFieldArray,
    optionsIndex,
    fieldCount,
    removePositionItem,
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
      <Line>
        <Field
          name={`${optionsFieldArray}.${optionsIndex}.${positionsFieldArray}.${index}.${positionPriceFieldName}`}
        >
          {({ field, form, meta }) => (
            <BasicField
              titleTid="Цена"
              placeholderTid="Введите цену позиции"
              error={
                meta.touched &&
                !meta.value &&
                form.errors[positionPriceFieldName]
              }
              {...field}
            />
          )}
        </Field>
        {fieldCount !== 1 && (
          <Button type="button" onClick={() => removePositionItem(index)}>
            <RemoveIcon />
          </Button>
        )}
      </Line>
    </>
  );
}
const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: ${spacing(4)};
`;
