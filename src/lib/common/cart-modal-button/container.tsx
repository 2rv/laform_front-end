import { useState, useEffect, ChangeEvent } from 'react';
import {
  BASKET_STORE_NAME,
  BASKET_ROUTE_PATH,
  addToCartAction,
} from 'src/core/basket';
import { redirect } from 'src/main/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { isRequestPending } from 'src/main/store/store.service';
import { useFormik } from 'formik';
import { CartModalContainerProps, CART_MODAL_FIELD_NAME } from './type';
import { CartButtonComponent } from './component';
import {
  getCountUtil,
  getDiscountUtil,
  getInfoUtil,
  getLengthUtil,
  getPriceUtil,
  isCartUtil,
} from './utils';
import { basketStateType } from 'src/core/basket/basket.type';

export function CartButtonContainer(props: CartModalContainerProps) {
  const {
    id,
    type = false,
    price = 0,
    discount = 0,
    count = 0,
    length = 0,
    options = [],
    colors = [],
    sizes = [],
    isCount = false,
    isLength = false,
    thisIsCart = false,
    optionType = 0,
  } = props;
  if (!id || type === false || thisIsCart) return null;

  const { bascketState, basketAction, basketActiveId } = useSelector(
    (state: any) => ({
      bascketState: state[BASKET_STORE_NAME].basket,
      basketAction: state[BASKET_STORE_NAME].basketAction,
      basketActiveId: state[BASKET_STORE_NAME].activeId,
    }),
  );

  const dispatch = useDispatch();
  const isPending = isRequestPending(basketAction);
  const [isCart, setCart] = useState(false);
  const formik = useFormik({
    initialValues: {
      [CART_MODAL_FIELD_NAME.OPTION]: -1,
      [CART_MODAL_FIELD_NAME.COLOR]: -1,
      [CART_MODAL_FIELD_NAME.SIZE]: -1,
      [CART_MODAL_FIELD_NAME.COUNT]: 0,
      [CART_MODAL_FIELD_NAME.LENGTH]: 0,
    },
    initialTouched: {
      [CART_MODAL_FIELD_NAME.OPTION]: false,
      [CART_MODAL_FIELD_NAME.COLOR]: false,
      [CART_MODAL_FIELD_NAME.SIZE]: false,
      [CART_MODAL_FIELD_NAME.COUNT]: false,
      [CART_MODAL_FIELD_NAME.LENGTH]: false,
    },
    onSubmit: () => {},
  });

  useEffect(() => {
    const result = bascketState.some((item: basketStateType) => {
      return isCartUtil({
        options: options,
        colors: colors,
        sizes: sizes,
        option: +formik.values.option,
        size: +formik.values.size,
        color: +formik.values.color,
        optionId: item.optionId,
        id: id,
        productId: item.id,
        optionType: optionType,
      });
    });
    setCart(Boolean(result));
  }, [bascketState, formik.values]);

  const getPrice = (): number => {
    return getPriceUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: +formik.values.option,
      size: +formik.values.size,
      color: +formik.values.color,
      count: formik.values.count,
      length: formik.values.length,
      price: price,
      isCount: isCount,
      isLength: isLength,
      optionType: optionType,
    });
  };
  const getDiscount = (): number => {
    return getDiscountUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: +formik.values.option,
      size: +formik.values.size,
      color: +formik.values.color,
      discount: discount,
      optionType: optionType,
    });
  };
  const getCount = (): number => {
    return getCountUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: +formik.values.option,
      size: +formik.values.size,
      color: +formik.values.color,
      count: count,
      optionType: optionType,
    });
  };
  const getLength = (): number => {
    return getLengthUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: +formik.values.option,
      size: +formik.values.size,
      color: +formik.values.color,
      length: length,
      optionType: optionType,
    });
  };
  const getInfo = () => {
    return getInfoUtil({
      id: id,
      type: type,
      options: options,
      colors: colors,
      sizes: sizes,
      option: +formik.values.option,
      size: +formik.values.size,
      color: +formik.values.color,
      count: formik.values.count,
      length: formik.values.length,
      isCount: isCount,
      isLength: isLength,
      optionType: optionType,
    });
  };

  const isDisabled = (): boolean => {
    if (getPrice() <= 0) return true;
    if (optionType === 1) return !Boolean(formik.values.option);
    if (optionType === 2) return !Boolean(formik.values.size);
    if (optionType === 3) return !Boolean(formik.values.color);
    return false;
  };

  const handleBasket = () => {
    if (isCart) return redirect(BASKET_ROUTE_PATH);
    dispatch(addToCartAction(getInfo()));
  };
  const handleCount = (value: number) => {
    const countNum = getCount();
    if (countNum < value) {
      return formik.setFieldValue(CART_MODAL_FIELD_NAME.COUNT, countNum);
    }
    formik.setFieldValue(CART_MODAL_FIELD_NAME.COUNT, value);
  };
  const handleLenght = (value: number) => {
    const lengthNum = getLength();
    if (Math.floor(lengthNum * 100) < Math.floor(value * 100)) {
      return formik.setFieldValue(CART_MODAL_FIELD_NAME.LENGTH, lengthNum);
    }
    formik.setFieldValue(CART_MODAL_FIELD_NAME.LENGTH, value);
  };
  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    formik.setFieldValue(CART_MODAL_FIELD_NAME.COUNT, 0);
    formik.setFieldValue(CART_MODAL_FIELD_NAME.LENGTH, 0);
    formik.handleChange(e);
  };

  return (
    <CartButtonComponent
      isCart={isCart}
      isPending={isPending}
      optionType={optionType}
      isCount={isCount}
      isLength={isLength}
      isDisabled={isDisabled()}
      price={getPrice()}
      discount={getDiscount()}
      options={options}
      colors={colors}
      sizes={sizes}
      count={getCount()}
      length={getLength()}
      values={formik.values}
      handleChange={handleChangeSelect}
      handleBlur={formik.handleBlur}
      handleCount={handleCount}
      handleLenght={handleLenght}
      addToCart={handleBasket}
      activeAdding={!!basketActiveId.find((aId: string) => aId === id)}
    />
  );
}
