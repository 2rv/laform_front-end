import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { IconButton } from '../../lib/element/button';
import { BasicField } from '../../lib/element/field';
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
    getFieldError,
    setNumber,
    remove,
    fieldTitle,
    fieldPlaceholder,
    fieldArrayName,
    optionName,
    optionPriceName,
    optionDiscountName,
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
        <BasicField
          titleTid="Цена"
          placeholderTid="Введите цену (руб.)"
          name={`${fieldArrayName}.${index}.${optionPriceName}`}
          value={value[optionPriceName]}
          error={getFieldError(optionPriceName, index)}
          onChange={setNumber(optionPriceName, index)}
          onBlur={handleBlur}
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
        <Line>
          <Button onClick={() => remove(index)}>
            <RemoveIcon />
          </Button>
        </Line>
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
