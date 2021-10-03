import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { THEME_COLOR, spacing } from '../../theme';
import { CardActionTypeProps } from './card.type';
import { ButtonPrimary, ButtonSecondary } from '../button';
import { BASKET_ROUTE_PATH, BASKET_STORE_NAME } from 'src/core/basket';
import { redirect } from 'src/main/navigation';
import { Popup } from '../popup';
import { FieldLayout } from '../layout';
import { ProductSelect } from 'src/core/block-product-components';
import { TextSecondary } from '../text';
import { CardPrice } from './card.components';
import { useSelector } from 'react-redux';
import { isRequestPending } from 'src/main/store/store.service';

export function CartButton(props: CardActionTypeProps) {
  const { id, type = false, onCart, sizes, colors, programs } = props;
  if (!id || type === false || !onCart) return null;
  const { bascketState, basketAction } = useSelector((state: any) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    basketAction: state[BASKET_STORE_NAME].basketAction,
  }));
  const isPending = isRequestPending(basketAction);

  const [size, setSize] = useState({ id: undefined, price: null });
  const [color, setColor] = useState({ id: undefined, price: null });
  const [program, setProgram] = useState({ id: undefined, price: null });
  const [isCart, setCart] = useState(false);

  useEffect(() => {
    const result = bascketState.find((item: any) => {
      if (item.id === id) {
        if (type === 0) return item.program === program.id;
        if (type === 1) return item.size === size.id;
        if (type === 2) return item.size === size.id;
        if (type === 3) return item.size === size.id && item.color === color.id;
      }
    });
    setCart(Boolean(result));
  }, [size, color, program, bascketState]);

  const addToCart = (setVisible: Function) => () => {
    setVisible(false);
    if (isCart) return redirect(BASKET_ROUTE_PATH);

    onCart({
      id,
      type,
      color: color.id,
      size: size.id,
      program: program.id,
    });
  };

  const disabled = () => {
    if (type === 0 && !program.id) return true;
    if ((type === 1 || type === 2) && !size.id) return true;
    if (type === 3 && (!size.id || !color.id)) return true;
    return false;
  };
  return (
    <Popup
      mobileRight
      disableRelative
      top={0}
      content={(setVisible: Function) => (
        <Content>
          <FieldLayout>
            <TextSecondary tid="Нажмите и выберите каждый параметр" />
            <ProductSelect
              name="Размер"
              selectOptions={sizes}
              handleChange={setSize}
              isTooltip
            />
            <ProductSelect
              name="Цвет"
              selectOptions={colors}
              handleChange={setColor}
            />
            <ProductSelect
              name="Программа"
              selectOptions={programs}
              handleChange={setProgram}
            />
          </FieldLayout>
          <CardPrice price={size.price || program.price || 0} />
          <FieldLayout>
            <Button
              disabled={disabled()}
              tid={isCart ? 'BASKET.GO_TO_BASKET' : 'BASKET.ADD_TO_BASKET'}
              active={isCart}
              onClick={addToCart(setVisible)}
            />
            <ButtonSecondary
              tid="OTHER.CANCEL"
              onClick={() => setVisible(false)}
            />
          </FieldLayout>
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
