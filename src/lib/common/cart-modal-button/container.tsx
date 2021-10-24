import { useState, useEffect } from 'react';
import {
  BASKET_STORE_NAME,
  BASKET_ROUTE_PATH,
  addToBasket,
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
import { LANG_STORE_NAME } from '../lang';

export function CartButtonContainer(props: CartModalContainerProps) {
  const {
    id,
    type = false,
    price = 0,
    discount = 0,
    count,
    length,
    options = [],
    colors = [],
    sizes = [],
    isCount = false,
    isLength = false,
    onCart,
  } = props;
  if (!id || type === false || !onCart) return null;

  const { bascketState, basketAction, currentLang } = useSelector(
    (state: any) => ({
      bascketState: state[BASKET_STORE_NAME].basket,
      basketAction: state[BASKET_STORE_NAME].basketAction,
      currentLang: state[LANG_STORE_NAME].active.toLowerCase(),
    }),
  );

  const dispatch = useDispatch();
  const isPending = isRequestPending(basketAction);
  const [isCart, setCart] = useState(false);
  const formik = useFormik({
    initialValues: {
      [CART_MODAL_FIELD_NAME.OPTION]: '',
      [CART_MODAL_FIELD_NAME.COLOR]: '',
      [CART_MODAL_FIELD_NAME.SIZE]: '',
      [CART_MODAL_FIELD_NAME.COUNT]: '',
      [CART_MODAL_FIELD_NAME.LENGTH]: '',
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
    const result = bascketState.find((item: any) => {
      return checkCart(item.id, item.optionId);
    });
    setCart(Boolean(result));
  }, [bascketState, formik.values]);

  const handleBasket = () => {
    if (isCart) return redirect(BASKET_ROUTE_PATH);
    dispatch(addToBasket(getInfo(), currentLang));
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
  const handleChangeSelect = (e: any) => {
    formik.setFieldValue(CART_MODAL_FIELD_NAME.COUNT, '');
    formik.setFieldValue(CART_MODAL_FIELD_NAME.LENGTH, '');
    formik.handleChange(e);
  };
  const getPrice = (): number => {
    return getPriceUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: formik.values.option,
      size: formik.values.size,
      color: formik.values.color,
      count: Number(formik.values.count),
      length: Number(formik.values.length),
      price: price,
      isCount: isCount,
      isLength: isLength,
    });
  };
  const getDiscount = (): number => {
    return getDiscountUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: formik.values.option,
      size: formik.values.size,
      color: formik.values.color,
      discount: discount,
    });
  };
  const getCount = (): number => {
    return getCountUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: formik.values.option,
      size: formik.values.size,
      color: formik.values.color,
      count: count,
    });
  };
  const getLength = (): number => {
    return getLengthUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: formik.values.option,
      size: formik.values.size,
      color: formik.values.color,
      length: length,
    });
  };
  const getInfo = () => {
    return getInfoUtil({
      id: id,
      type: type,
      options: options,
      colors: colors,
      sizes: sizes,
      option: formik.values.option,
      size: formik.values.size,
      color: formik.values.color,
      count: Number(formik.values.count),
      length: Number(formik.values.length),
      isCount: isCount,
      isLength: isLength,
    });
  };
  const isDisabled = (): boolean => {
    if (getPrice() <= 0) return true;
    if (Boolean(options.length)) return !Boolean(formik.values.option);
    if (Boolean(sizes.length)) return !Boolean(formik.values.size);
    if (Boolean(colors.length)) return !Boolean(formik.values.color);
    return false;
  };
  const checkCart = (productId: string, optionId: string): boolean => {
    return isCartUtil({
      options: options,
      colors: colors,
      sizes: sizes,
      option: formik.values.option,
      size: formik.values.size,
      color: formik.values.color,
      optionId: optionId,
      id: id,
      productId: productId,
    });
  };
  return (
    <CartButtonComponent
      isCart={isCart}
      isPending={isPending}
      isOptions={Boolean(options.length)}
      isSizes={Boolean(sizes.length)}
      isColors={Boolean(colors.length)}
      isCount={isCount}
      isLength={isLength}
      isDisabled={isDisabled()}
      price={Number(getPrice())}
      discount={Number(getDiscount())}
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
    />
  );
}
