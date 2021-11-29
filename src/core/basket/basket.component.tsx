import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { CartSign, CartTables, FormContainer } from './frames';
import { BasketComponentProps } from './basket.type';

export function BasketComponent(props: BasketComponentProps) {
  const {
    isEmpty,
    isAuth,

    changeItem,
    deleteItem,
    sewingProducts,
    masterProducts,
    patternProducts,
    ...otherProps
  } = props;
  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      {isEmpty ? (
        <TextSecondary tid="BASKET.CART_IS_EMPTY" />
      ) : (
        <SectionLayout>
          <CartTables
            changeItem={changeItem}
            deleteItem={deleteItem}
            sewingProducts={sewingProducts}
            masterProducts={masterProducts}
            patternProducts={patternProducts}
          />
          <FormContainer isAuth={isAuth} {...otherProps} />
        </SectionLayout>
      )}
      {!isAuth && <CartSign />}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
