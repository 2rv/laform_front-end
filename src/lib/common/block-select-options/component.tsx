import styled, { css } from 'styled-components';
import { THEME_COLOR, spacing } from '../../theme';
import { ButtonPrimary } from '../../element/button';
import { SectionLayout } from '../../element/layout';
import {
  CardCount,
  CardLength,
  LikeButton,
  ProductVendorCode,
  CardPrice,
} from '../../element/card/card.components';
import { CartModalComponentProps, CART_MODAL_FIELD_NAME } from './type';
import { Divider } from 'src/lib/element/divider';
import { ProductSelect } from './product-select';
import {
  ProductEnumeratorCount,
  ProductEnumeratorLength,
} from './product-enumerator';

export function ProductSelectOptionsComponent(props: CartModalComponentProps) {
  const {
    id,
    type,
    like,
    vendorCode,
    isOptions,
    isSizes,
    isColors,
    isCount,
    isLength,
    isCart,
    isPending,
    isDisabled,
    options,
    colors,
    sizes,
    count,
    length,
    handleChange,
    handleCount,
    handleLenght,
    handleBlur,
    addToCart,
    values,
    price,
    discount,
  } = props;

  return (
    <Container>
      <SectionLayout type="TEXT_SMALL">
        {Boolean(isOptions) && (
          <ProductSelect
            titleTid="Опция"
            name="option"
            defaultTid="Выберите опцию"
            options={options}
            value={values[CART_MODAL_FIELD_NAME.OPTION]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        {Boolean(isSizes) && (
          <ProductSelect
            titleTid="Размер"
            defaultTid="Выберите размер"
            name="size"
            options={sizes}
            value={values[CART_MODAL_FIELD_NAME.SIZE]}
            onChange={handleChange}
            onBlur={handleBlur}
            isSize
          />
        )}
        {Boolean(isColors) && (
          <ProductSelect
            titleTid="Цвет"
            defaultTid="Выберите цвет"
            name="color"
            options={colors}
            value={values[CART_MODAL_FIELD_NAME.COLOR]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        {Boolean(isCount) && (
          <ProductEnumeratorCount
            titleTid="Количество"
            maxNumber={count}
            minNumber={0}
            count={values[CART_MODAL_FIELD_NAME.COUNT]}
            onChange={handleCount}
          />
        )}
        {Boolean(isLength) && (
          <ProductEnumeratorLength
            titleTid="Длинна"
            maxLength={length}
            minLength={0}
            length={values[CART_MODAL_FIELD_NAME.LENGTH]}
            onChange={handleLenght}
          />
        )}
      </SectionLayout>
      <Divider />
      <FooterCase>
        <CardPrice price={price} discount={discount} />
        <ActionCase>
          <Button
            disabled={isDisabled}
            active={isCart}
            onClick={() => addToCart()}
            tid={
              isPending
                ? 'Подождите'
                : isCart
                ? 'BASKET.GO_TO_BASKET'
                : 'BASKET.ADD_TO_BASKET'
            }
          />
          <LikeButton id={id} type={type} like={like} />
        </ActionCase>
      </FooterCase>
      <Case>
        {isCount && <CardCount count={count} />}
        {isLength && <CardLength length={length} />}
        <ProductVendorCode vendorCode={vendorCode} />
      </Case>
    </Container>
  );
}
const Case = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing(2)};
  line-height: 1.5;
`;
const FooterCase = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const Button = styled(ButtonPrimary)<{ active?: boolean }>`
  ${(p) =>
    p.active &&
    css`
      background-color: ${THEME_COLOR.DARK_GRAY};
    `}
`;
const ActionCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;