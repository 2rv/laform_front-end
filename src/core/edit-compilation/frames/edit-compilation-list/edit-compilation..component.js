import React from 'react';
import styled from 'styled-components';

import { BasicField } from 'src/lib/element/field';
import { ButtonSecondary } from 'src/lib/element/button';

export function EditCompilationComponent({ productName, changeProductNameHandler }) {
  const [ productNameValue, setProductNameValue ] = React.useState(productName);

  return (
    <EditProductContainer>
      <BasicField
        titleTid="Название"
        placeholderTid="Изменить название"
        name="productName"
        value={productNameValue}
        onChange={(e) => setProductNameValue(e.target.value)}
      />
      <ButtonSecondary
        tid="Заменить"
        onClick={() => changeProductNameHandler(productNameValue)}
        disabled={!productNameValue.length}
      />
    </EditProductContainer>
  );
}

const EditProductContainer = styled.div`
  display: grid;
  gap: 10px;
`;
