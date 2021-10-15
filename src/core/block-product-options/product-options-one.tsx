import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { IconButton } from '../../lib/element/button';
import { BasicField } from '../../lib/element/field';
import { FieldLayout } from '../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../asset/svg/remove.svg';
import { Divider } from 'src/lib/element/divider';
import React from 'react';
import { ProductOptionsOneProps } from './components.type';

export function ProductOptionsOne(props: ProductOptionsOneProps) {
  const {
    value,
    index,
    isFirst,
    handleChange,
    handleBlur,
    setNumber,
    setTwoDigit,
    setToHundred,
    getFieldError,
    remove,
    fieldArrayName,
    optionSizeName,
    optionColorName,
    optionPriceName,
    optionDiscountName,
    optionCountName,
    optionLengthName,
    isCount,
    isLength,
  } = props;

  return (
    <React.Fragment>
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="Размер"
          placeholderTid="Введите размер"
          name={`${fieldArrayName}.${index}.${optionSizeName}`}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(optionSizeName, index)}
          value={value[optionSizeName]}
        />
        <Line>
          <BasicField
            titleTid="Цвет"
            placeholderTid="Введите цвет"
            name={`${fieldArrayName}.${index}.${optionColorName}`}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError(optionColorName, index)}
            value={value[optionColorName]}
          />
          <Button onClick={() => remove(index)}>
            <RemoveIcon />
          </Button>
        </Line>

        <BasicField
          titleTid="Цена"
          placeholderTid="Введите цену (руб.)"
          name={`${fieldArrayName}.${index}.${optionPriceName}`}
          value={value[optionPriceName]}
          type="number"
          error={getFieldError(optionPriceName, index)}
          onChange={setTwoDigit(optionPriceName, index)}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="Введите скидку (%)"
          placeholderTid="0"
          type="number"
          name={`${fieldArrayName}.${index}.${optionDiscountName}`}
          value={value[optionDiscountName]}
          error={getFieldError(optionDiscountName, index)}
          onChange={setToHundred(optionDiscountName, index)}
          onBlur={handleBlur}
        />
        {isCount && (
          <BasicField
            titleTid="Введите количество (Шт.)"
            placeholderTid="0"
            type="number"
            name={optionCountName}
            value={value[optionCountName]}
            error={getFieldError(optionCountName)}
            onChange={setNumber(optionCountName, index)}
            onBlur={handleBlur}
          />
        )}
        {isLength && (
          <BasicField
            titleTid="Введите длинну (Метр)"
            placeholderTid="0"
            type="number"
            name={optionLengthName}
            value={value[optionLengthName]}
            error={getFieldError(optionLengthName)}
            onChange={setTwoDigit(optionLengthName, index)}
            onBlur={handleBlur}
          />
        )}
      </FieldLayout>
      {isFirst && <Divider />}
    </React.Fragment>
  );
}

const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
