import { Field, FieldArray } from 'formik';
import { BasicField, FieldSelect } from '../../../../lib/element/field';
import { ButtonBasic } from '../../../../lib/element/button';
import { FieldLayout } from '../../../../lib/element/layout';
import React from 'react';
import { ProductPositionsItem } from './product-positions-item';

export function ProductOptionsItem(props) {
  const {
    index,
    values,
    //---------------------------- для fieldArray
    optionsFieldArray,
    positionsFieldArray,
    initialPositionsItem,
    //----------------------------  fieldNames
    categoriesForOptionSelect, // опции для селекта
    optionCategorySelect,
    positionNameFieldName,
    positionPriceFieldName,
  } = props;
  return (
    <>
      <Field name={`${optionsFieldArray}.${index}.${optionCategorySelect}`}>
        {({ field, form, meta }) => (
          <FieldSelect
            titleTid="Опция (категория позиции)"
            options={categoriesForOptionSelect}
            {...field}
          />
        )}
      </Field>
      <FieldLayout type="double">
        <FieldArray
          name={`${optionsFieldArray}.${index}.${positionsFieldArray}`}
        >
          {({ remove, push }) => (
            <>
              {values[positionsFieldArray].map((_, i) => (
                <ProductPositionsItem
                  key={i}
                  index={i}
                  optionsFieldArray={optionsFieldArray}
                  optionsIndex={index}
                  positionsFieldArray={positionsFieldArray}
                  positionNameFieldName={positionNameFieldName}
                  positionPriceFieldName={positionPriceFieldName}
                />
              ))}
              <ButtonBasic
                tid="Добавить позицию"
                type="button"
                onClick={() => push(initialPositionsItem)}
              />
            </>
          )}
        </FieldArray>
      </FieldLayout>
    </>
  );
}
