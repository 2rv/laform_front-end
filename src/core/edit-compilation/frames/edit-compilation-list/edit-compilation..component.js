import React from 'react';
import styled from 'styled-components';

import { BasicField } from 'src/lib/element/field';
import { ButtonSecondary } from 'src/lib/element/button';

export function EditCompilationComponent({ title, changeProductNameHandler }) {
  const [ productNameValue, setProductNameValue ] = React.useState(title);

  return (
    <EditProductContainer>
      <BasicField
        titleTid="COMPILATION.EDIT_PRODUCT.FIELD.TITLE"
        placeholderTid="COMPILATION.EDIT_PRODUCT.FIELD.PLACEHOLDER"
        name="productName"
        value={productNameValue}
        onChange={(e) => setProductNameValue(e.target.value)}
      />
      <ButtonSecondary
        tid="COMPILATION.EDIT_PRODUCT.BUTTON_TITLE"
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
