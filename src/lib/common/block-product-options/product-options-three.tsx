import styled from 'styled-components';
import { spacing } from '../../theme';
import { IconButton } from '../../element/button';
import { BasicField } from '../../element/field';
import { FieldLayout } from '../../element/layout';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { Divider } from 'src/lib/element/divider';
import React from 'react';
import { ProductOptionsThreeProps } from './components.type';

export function ProductOptionsThree(props: ProductOptionsThreeProps) {
  const {
    handleChange,
    handleBlur,
    setNumber,
    setTwoDigit,
    setToHundred,
    isFirst,
    value,
    index,
    fieldArrayName,
    optionSizeName,
    optionSizePriceName,
    optionColorName,
    optionColorPriceName,
    optionDiscountName,
    getFieldError,
    remove,
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
            titleTid="Цена"
            placeholderTid="Введите цену за размер (руб.)"
            name={`${fieldArrayName}.${index}.${optionSizePriceName}`}
            value={value[optionSizePriceName]}
            error={getFieldError(optionSizePriceName, index)}
            type="number"
            onChange={setTwoDigit(optionSizePriceName, index)}
            onBlur={handleBlur}
          />
          <Button onClick={() => remove(index)}>
            <RemoveIcon />
          </Button>
        </Line>

        <BasicField
          titleTid="Цвет"
          placeholderTid="Введите цвет"
          name={`${fieldArrayName}.${index}.${optionColorName}`}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(optionColorName, index)}
          value={value[optionColorName]}
        />
        <BasicField
          titleTid="Цена"
          placeholderTid="Введите цену за цвет (руб.)"
          name={`${fieldArrayName}.${index}.${optionColorPriceName}`}
          value={value[optionColorPriceName]}
          error={getFieldError(optionColorPriceName, index)}
          type="number"
          onChange={setTwoDigit(optionSizePriceName, index)}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="Введите скидку (%)"
          placeholderTid="0"
          name={`${fieldArrayName}.${index}.${optionDiscountName}`}
          value={value[optionDiscountName]}
          error={getFieldError(optionDiscountName, index)}
          type="number"
          onChange={setToHundred(optionDiscountName, index)}
          onBlur={handleBlur}
        />
        {isCount && (
          <BasicField
            titleTid="Введите количество (Шт.)"
            placeholderTid="0"
            name={optionCountName}
            value={value[optionCountName]}
            error={getFieldError(optionCountName)}
            type="number"
            onChange={setNumber(optionCountName, index)}
            onBlur={handleBlur}
          />
        )}
        {isLength && (
          <BasicField
            titleTid="Введите длинну (Метр)"
            placeholderTid="0"
            name={optionLengthName}
            value={value[optionLengthName]}
            error={getFieldError(optionLengthName)}
            type="number"
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
