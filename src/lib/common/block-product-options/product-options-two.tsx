import styled from 'styled-components';
import { spacing } from '../../theme';
import { IconButton } from '../../element/button';
import { BasicField } from '../../element/field';
import { FieldLayout } from '../../element/layout';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { Divider } from 'src/lib/element/divider';
import React from 'react';
import { ProductOptionsTwoProps } from './components.type';
import { MultiFilesBlock } from '../multi-files';

export function ProductOptionsTwo(props: ProductOptionsTwoProps) {
  const {
    index,
    isFirst,
    value,
    handleChange,
    setNumber,
    setTwoDigit,
    setToHundred,
    setPdfFile,
    handleBlur,
    getFieldError,
    remove,
    fieldTitle,
    fieldPlaceholder,
    fieldArrayName,
    optionName,
    optionPriceName,
    optionDiscountName,
    optionCountName,
    optionLengthName,
    optionFileName,
    optionFilesName,
    isFile,
    isCount,
    isLength,
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
            titleTid="Цена"
            placeholderTid="Введите цену (руб.)"
            name={`${fieldArrayName}.${index}.${optionPriceName}`}
            value={value[optionPriceName]}
            error={getFieldError(optionPriceName, index)}
            type="number"
            onChange={setTwoDigit(optionPriceName, index)}
            onBlur={handleBlur}
          />
          <Button onClick={() => remove(index)}>
            <RemoveIcon />
          </Button>
        </Line>

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
            name={`${fieldArrayName}.${index}.${optionCountName}`}
            value={value[optionCountName]}
            error={getFieldError(optionCountName, index)}
            type="number"
            onChange={setNumber(optionCountName, index)}
            onBlur={handleBlur}
          />
        )}
        {isLength && (
          <BasicField
            titleTid="Введите длинну (Метр)"
            placeholderTid="0"
            name={`${fieldArrayName}.${index}.${optionLengthName}`}
            value={value[optionLengthName]}
            error={getFieldError(optionLengthName, index)}
            type="number"
            onChange={setTwoDigit(optionLengthName, index)}
            onBlur={handleBlur}
          />
        )}
        {isFile && (
          <MultiFilesBlock
            handleChange={setPdfFile}
            fileName={optionFileName}
            filesName={`${fieldArrayName}.${index}.${optionFilesName}`}
            values={value[optionFilesName]}
            handleBlur={handleBlur}
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
