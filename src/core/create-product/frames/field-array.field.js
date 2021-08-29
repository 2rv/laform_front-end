import styled from 'styled-components';
import { Field, FieldArray } from 'formik';
import { spacing, THEME_SIZE } from '../../../lib/theme';
import { BasicField, FieldSelect } from '../../../lib/element/field';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from '../../../lib/element/button';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { TitlePrimary } from 'src/lib/element/title';
import React from 'react';

export function FieldArrayField(props) {
  const {
    nameFieldArray,
    namePosition,
    initialData,
    pricePosition,
    placeholder,
    title,
    errors,
    touched,
    setFieldValue,
    values,
  } = props;

  const numberValue = (name) => (e) =>
    setFieldValue(name, Number(e.currentTarget.value));

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
                      titleTid={title}
                      placeholderTid={placeholder}
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
                        onChange={numberValue(field.name)}
                        onBlur={field.onBlur}
                      />
                    )}
                  </Field>
                  {values[nameFieldArray].length !== 1 && (
                    <Button type="button" onClick={() => remove(index)}>
                      <RemoveIcon />
                    </Button>
                  )}
                </Line>
              </React.Fragment>
            ))}
            <ButtonSecondary
              tid="Добавить программу"
              type="button"
              onClick={() => push(initialData[nameFieldArray])}
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
