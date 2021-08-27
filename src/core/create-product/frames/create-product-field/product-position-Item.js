import { Field } from 'formik';
import styled from 'styled-components';
import { spacing } from '../../../../lib/theme';
import { BasicField, FieldSelect } from '../../../../lib/element/field';
import { ButtonBasic, IconButton } from '../../../../lib/element/button';
import { FieldLayout } from '../../../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../../../asset/svg/remove.svg';
import {
  required,
  number,
  minLength,
  numberPositive,
  numberPositiveMin,
  numberPositiveMax,
} from '../../../../main/validate/validate.service';

export function PositionItem(props) {
  const {
    index,
    //---------------------------- fieldArray
    fieldCount,
    nameFieldArray,
    remove,
    //---------------------------- fieldNames
    namePosition,
    pricePosition,
    //----------------------------
    placeholderTid,
    titleTid,
    errors,
    touched,
    setFieldValue,
  } = props;
  const getFieldError = (name) =>
    errors?.[name] && touched?.[name] && errors?.[name];
  return (
    <>
      <Field name={`${nameFieldArray}.${index}.${namePosition}`}>
        {({ field, form, meta }) => (
          <BasicField
            titleTid={titleTid}
            placeholderTid={placeholderTid}
            error={getFieldError(namePosition)}
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
              error={getFieldError(pricePosition)}
              name={field.name}
              value={field.value}
              onChange={(e) =>
                setFieldValue(field.name, Number(e.currentTarget.value))
              }
              onBlur={field.onBlur}
            />
          )}
        </Field>
        {fieldCount !== 1 && (
          <Button type="button" onClick={() => remove(index)}>
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
