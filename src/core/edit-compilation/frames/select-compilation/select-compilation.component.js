import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { updatePinned } from '../../edit-compilation.action';

export function SelectCompilationComponent(props) {
  const {
    id,
    title,
    pinned,
    image,
    compilationName,
    currentLang,
    setModalVisibility,
  } = props;

  const dispatch = useDispatch();

  const updateCompilation = () => {
    dispatch(updatePinned(
      id,
      compilationName,
      currentLang,
      { pinned: true },
    ));
    setModalVisibility(false);
  }

  return (
    <>
      <ProductContainer>
        <ProductLayout>
          <ProductImage src={image} />
          <ProductName tid={title} />
        </ProductLayout>
        <ProductLayout>
          {pinned ? (
            <TextSecondary tid="Уже добавлен в лучшие подборки" />
          ) : (
            <ButtonBasic onClick={updateCompilation}>
              <TextSecondary tid="Добавить в лучшие подборки" />
            </ButtonBasic>
          )}
          </ProductLayout>
      </ProductContainer>
      <Divider />
    </>
  );
}

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const ProductLayout = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const ProductName = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;

const ProductImage = styled.img`
  height: 75px;
  width: 75px;
`;

const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.GRAY};
`;
