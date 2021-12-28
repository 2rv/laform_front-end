import styled, { css } from 'styled-components';
import { THEME_COLOR, spacing } from '../../theme';
import { ButtonPrimary, ButtonSecondary } from '../../element/button';
import { Popup } from '../../element/popup';
import { SectionLayout } from '../../element/layout';
import { TextSecondary } from '../../element/text';
import {
  CardCount,
  CardPrice,
  CardLength,
} from '../../element/card/card.components';
import { FieldSelect } from '../../element/field';
import { EnumeratorCount, EnumeratorLength } from '../../element/enumerator';
import { CartModalComponentProps, CART_MODAL_FIELD_NAME } from './type';

export function CartButtonComponent(props: CartModalComponentProps) {
  const {
    optionType,
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

  const handleCart = (setVisible: Function) => () => {
    addToCart();
    setVisible();
  };
  if (optionType === 0 && !isCount && !isLength) {
    return (
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
    );
  }

  return (
    <Popup
      mobileRight
      disableRelative
      top={0}
      content={(setVisible: Function) => (
        <Content>
          <SectionLayout type="TEXT_SMALL">
            <TextSecondary tid="Выберите параметр" />
            {optionType === 1 && (
              <FieldSelect
                titleTid="Опция товара"
                name="option"
                defaultTid="Выберите опцию"
                options={options}
                value={values[CART_MODAL_FIELD_NAME.OPTION]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {optionType === 2 && (
              <FieldSelect
                titleTid="Размер товара"
                defaultTid="Выберите размер"
                name="size"
                options={sizes}
                value={values[CART_MODAL_FIELD_NAME.SIZE]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {optionType === 3 && (
              <FieldSelect
                titleTid="Цвет товара"
                defaultTid="Выберите цвет"
                name="color"
                options={colors}
                value={values[CART_MODAL_FIELD_NAME.COLOR]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            {Boolean(isCount) && (
              <EnumeratorCount
                titleTid="Количество"
                maxNumber={count}
                minNumber={0}
                count={values[CART_MODAL_FIELD_NAME.COUNT]}
                onChange={handleCount}
              />
            )}
            {Boolean(isLength) && (
              <EnumeratorLength
                titleTid="Длинна"
                maxLength={length}
                minLength={0}
                length={values[CART_MODAL_FIELD_NAME.LENGTH]}
                onChange={handleLenght}
              />
            )}
          </SectionLayout>
          <SectionLayout type="TEXT_SMALL">
            {isCount && <CardCount count={count} />}
            {isLength && <CardLength length={length} />}
            <CardPrice price={price} discount={discount} />
            <Button
              disabled={isDisabled}
              tid={isCart ? 'BASKET.GO_TO_BASKET' : 'BASKET.ADD_TO_BASKET'}
              active={isCart}
              onClick={handleCart(setVisible)}
            />
            <ButtonSecondary
              tid="OTHER.CANCEL"
              onClick={() => setVisible(false)}
            />
          </SectionLayout>
        </Content>
      )}
      children={
        <Button
          disabled={isPending}
          active={isCart}
          tid={
            isPending ? 'Подождите' : isCart ? 'OTHER.SELECTED' : 'OTHER.SELECT'
          }
        />
      }
    />
  );
}

const Button = styled(ButtonPrimary)<{ active?: boolean }>`
  ${(p) =>
    p.active &&
    css`
      background-color: ${THEME_COLOR.DARK_GRAY};
    `}
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing(2)};
  line-height: 1.5;
`;
