import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { THEME_COLOR, spacing } from '../../theme';
import { CardActionProps } from './card.type';
import { ButtonPrimary, ButtonSecondary } from '../button';
import { BASKET_ROUTE_PATH, BASKET_STORE_NAME } from 'src/core/basket';
import { redirect } from 'src/main/navigation';
import { Popup } from '../popup';
import { FieldLayout } from '../layout';
import { TextSecondary } from '../text';
import { CardPrice } from './card.components';
import { useSelector } from 'react-redux';
import { isRequestPending } from 'src/main/store/store.service';
import { useFormik } from 'formik';
import { FieldSelect } from '../field';

export function CartButton(props: CardActionProps) {
  const { id, type = false, onCart, options = [] } = props;
  if (!id || type === false || !onCart) return null;

  const { bascketState, basketAction } = useSelector((state: any) => ({
    bascketState: state[BASKET_STORE_NAME].basket,
    basketAction: state[BASKET_STORE_NAME].basketAction,
  }));
  const isPending = isRequestPending(basketAction);
  const [isCart, setCart] = useState(false);

  useEffect(() => {
    const result = bascketState.find((item: any) => {
      if (item.id === id) {
        return null;
      }
    });
    setCart(Boolean(result));
  }, [bascketState]);

  const formik = useFormik({
    initialValues: {
      option: 0,
    },
    initialTouched: {
      option: false,
    },
    onSubmit: () => {},
  });

  const addToCart = (setVisible: Function) => () => {
    setVisible(false);
    if (isCart) return redirect(BASKET_ROUTE_PATH);
    onCart({
      id,
      type,
      option: formik.values.option,
    });
  };

  return (
    <Popup
      mobileRight
      disableRelative
      top={0}
      content={(setVisible: Function) => (
        <Content>
          <FieldLayout>
            <TextSecondary tid="Выберите параметр" />
            <FieldSelect
              titleTid="Опция товара"
              name="option"
              options={options}
              value={formik.values.option}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FieldLayout>
          <FieldLayout>
            <CardPrice
              price={options[formik.values.option].price}
              discount={options[formik.values.option].discount}
            />
            <Button
              disabled={!formik.touched.option}
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
