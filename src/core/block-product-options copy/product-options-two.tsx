import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { IconButton } from '../../lib/element/button';
import { BasicField, FieldSelect } from '../../lib/element/field';
import { FieldLayout } from '../../lib/element/layout';
import { ReactComponent as RemoveIcon } from '../../asset/svg/remove.svg';
import { Divider } from 'src/lib/element/divider';
import React from 'react';
import { ProductOptionsTwoProps } from './components.type';

export function ProductOptionsTwo(props: ProductOptionsTwoProps) {
  const {
    index,
    isFirst,
    value,
    handleChange,
    handleBlur,
    optionTypeName,
    fieldArrayName,
    optionPriceName,
    getFieldError,
    setNumber,
    remove,
    fieldTitle,
    fieldPlaceholder,
    optionName,
    handleType,
  } = props;

  return (
    <React.Fragment key={index}>
      <FieldLayout type="double" adaptive key={index}>
        <BasicField
          titleTid={fieldTitle}
          placeholderTid={fieldPlaceholder}
          name={`${fieldArrayName}.${index}.${optionName}`}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError(optionName, index)}
          value={value[optionName]}
        />
        <Line>
          <BasicField
            name={`${fieldArrayName}.${index}.${optionPriceName}`}
            titleTid="DYNAMIC_FIELDS.PRICE.TITLE"
            placeholderTid="DYNAMIC_FIELDS.PRICE.PLACEHOLDER"
            error={getFieldError(optionPriceName, index)}
            value={value[optionPriceName]}
            onChange={setNumber(optionPriceName, index)}
            onBlur={handleBlur}
          />
          <Button onClick={() => remove(index)}>
            <RemoveIcon />
          </Button>
        </Line>
        <FieldSelect
          titleTid="Сменить тип параметра"
          options={optionSelectType}
          value={value[optionTypeName]}
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
