import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { IconButton } from '../../lib/element/button';
import { BasicField, FieldSelect } from '../../lib/element/field';
import { FieldLayout } from '../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../asset/svg/remove.svg';
import { Divider } from 'src/lib/element/divider';
import React from 'react';
import { ProductOptionsOneProps } from './components.type';

export function ProductOptionsOne(props: ProductOptionsOneProps) {
  const {
    handleChange,
    handleBlur,
    isFirst,
    value,
    index,
    optionTypeName,
    fieldArrayName,
    optionSizeName,
    optionColorName,
    optionSizePriceName,
    optionDiscountName,
    getFieldError,
    setNumber,
    remove,
    handleType,
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
            placeholderTid="Введите цену (руб.)"
            name={`${fieldArrayName}.${index}.${optionSizePriceName}`}
            value={value[optionSizePriceName]}
            error={getFieldError(optionSizePriceName, index)}
            onChange={setNumber(optionSizePriceName, index)}
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
          titleTid="Введите скидку (%)"
          placeholderTid="0"
          name={`${fieldArrayName}.${index}.${optionDiscountName}`}
          value={value[optionDiscountName]}
          error={getFieldError(optionDiscountName, index)}
          onChange={setNumber(optionDiscountName, index)}
          onBlur={handleBlur}
        />
        <FieldSelect
          value={value[optionTypeName]}
          titleTid="Сменить тип параметра"
          options={optionSelectType}
          onChange={handleType(index)}
        />
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
const optionSelectType = [
  { id: 1, tid: 'Размер, Цвет, Цена' },
  { id: 2, tid: 'Размер, Цена за размер' },
  { id: 3, tid: 'Цвет, Цена за цвет' },
  { id: 4, tid: 'Размер, Цена за размер, Цвет, Цена за цвет' },
];