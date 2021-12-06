import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { BASKET_STORE_NAME } from './basket.constant';
import { BasketComponent } from './basket.component';
import { convertForTable } from './basket.convert';
import {
  changeProductCartAction,
  deleteProuctCartAction,
  createOrderAction,
  getUserInfoAction,
} from './basket.action';
import { formValidation } from './basket.validation';
import {
  changeCartataType,
  formikValues,
  ORDER_FIELD_NAME,
} from './basket.type';

export function BasketContainer() {
  const dispatch = useDispatch();
  const { bascketState, user, isAuth, orderState, userInfoState } = useSelector(
    (state: any) => ({
      bascketState: state[BASKET_STORE_NAME].basket,
      isAuth: state[AUTH_STORE_NAME].logged,
      user: state[AUTH_STORE_NAME].user,
      orderState: state[BASKET_STORE_NAME].order,
      userInfoState: state[BASKET_STORE_NAME].userInfo,
    }),
  );
  useEffect(() => {
    if (isAuth) dispatch(getUserInfoAction());
  }, []);
  const {
    masterProducts,
    patternProducts,
    sewingProducts,
    basketPrice,
    basketCount,
  } = convertForTable(bascketState);

  const changeItem = (data: changeCartataType) => {
    dispatch(changeProductCartAction(data, bascketState));
  };
  const deleteItem = (data: changeCartataType) => {
    dispatch(deleteProuctCartAction(data, bascketState));
  };
  const onSubmit = (values: formikValues) => {
    dispatch(
      createOrderAction(values, bascketState, isAuth, Boolean(basketCount)),
    );
  };
  function initialValues(): formikValues {
    const userInfo = getRequestData(userInfoState, {
      [ORDER_FIELD_NAME.PHONE]: '',
      [ORDER_FIELD_NAME.FULL_NAME]: '',
    });
    return {
      [ORDER_FIELD_NAME.EMAIL]: user?.email || '',
      [ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]: '',
      [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: user?.emailConfirmed || false,
      [ORDER_FIELD_NAME.PHONE]: userInfo[ORDER_FIELD_NAME.PHONE],
      [ORDER_FIELD_NAME.FULL_NAME]: userInfo[ORDER_FIELD_NAME.FULL_NAME],
      [ORDER_FIELD_NAME.DESCRIPTION]: '',

      [ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ORDER_FIELD_NAME.PROMO_DISCOUNT]: 0,

      [ORDER_FIELD_NAME.ADRESS]: {
        country: '',
        city: '',
        settlement: '',
        street: '',
        house: '',
        postal_code: '',
        kladr_id: '',
      },
      [ORDER_FIELD_NAME.SDEK_POINT]: {},
      [ORDER_FIELD_NAME.SDEK_TARIFF]: {},

      [ORDER_FIELD_NAME.SAVE_USER_INFO]: false,
      [ORDER_FIELD_NAME.PRICE]: 0,
    };
  }
  return (
    <BasketComponent
      isPending={
        isRequestPending(orderState) || isRequestPending(userInfoState)
      }
      isAuth={isAuth}
      basketPrice={basketPrice}
      basketCount={basketCount}
      isEmpty={!Boolean(bascketState.length)}
      changeItem={changeItem}
      deleteItem={deleteItem}
      //--------------
      sewingProducts={sewingProducts}
      masterProducts={masterProducts}
      patternProducts={patternProducts}
      //--------------
      initialValues={initialValues()}
      validate={formValidation(Boolean(basketCount))}
      onSubmit={onSubmit}
      //--------------
      userInfoError={isRequestError(userInfoState)}
      userInfoErrorMessage={getRequestErrorMessage(userInfoState)}
      orderError={isRequestError(orderState)}
      orderErrorMessage={getRequestErrorMessage(orderState)}
      orderSuccess={isRequestSuccess(orderState)}
    />
  );
}
