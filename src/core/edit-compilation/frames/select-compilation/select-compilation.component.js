import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';

export function SelectCompilationComponent(props) {
  const {
    id,
    titleRu,
    image,
  } = props;

  return (
    <>
      <Product>
        <ProductLayout>
          <ProductImage src={image} />
          <ProductName tid={titleRu} />
        </ProductLayout>
        <ProductLayout>
          <ButtonBasic>
            <TextSecondary tid="Добавить в лучшие подборки" />
          </ButtonBasic>
        </ProductLayout>
      </Product>
      <Divider />
    </>
  );
}

const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.GRAY};
`;

const ProductLayout = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const ProductImage = styled.img`
  height: 75px;
  width: 75px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const ProductName = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
