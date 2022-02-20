import { useDispatch, useSelector } from 'react-redux';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from 'src/main/store/store.service';
import { BASKET_STORE_NAME } from './basket.constant';
import { BasketComponent } from './basket.component';
import { convertForTable } from './basket.convert';
import {
  changeProductCartAction,
  deleteProuctCartAction,
  createOrderAction,
} from './basket.action';
import { formValidation } from './basket.validation';
import { formikValues, ORDER_FIELD_NAME } from './basket.type';
import { USER_INFO_FIELD_NAME } from '../settings-user-info';
import {
  ChangeItemFnValues,
  DeleteItemFnValues,
} from 'src/lib/common/block-table';

export function BasketContainer() {
  const dispatch = useDispatch();
  const { bascketState, user, isAuth, orderState } = useSelector(
    (state: any) => ({
      bascketState: state[BASKET_STORE_NAME].basket,
      isAuth: state[AUTH_STORE_NAME].logged,
      user: state[AUTH_STORE_NAME].user,
      orderState: state[BASKET_STORE_NAME].order,
    }),
  );
  const {
    masterProducts,
    patternProducts,
    sewingProducts,
    basketPrice,
    basketCount,
  } = convertForTable(bascketState);

  const changeItem = (data: ChangeItemFnValues) => {
    dispatch(changeProductCartAction(data, bascketState));
  };
  const deleteItem = (data: DeleteItemFnValues) => {
    dispatch(deleteProuctCartAction(data, bascketState));
  };
  const onSubmit = (values: formikValues) => {
    console.log(basketCount, values.deliveryType);

    dispatch(
      createOrderAction(values, bascketState, isAuth, Boolean(basketCount)),
    );
  };
  function initialValues(): formikValues {
    return {
      [ORDER_FIELD_NAME.EMAIL]: user?.email || '',
      [ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]: '',
      [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: user?.emailConfirmed || false,
      [ORDER_FIELD_NAME.DESCRIPTION]: '',

      [USER_INFO_FIELD_NAME.COUNTRY]: {},
      [USER_INFO_FIELD_NAME.CITY]: {},
      [USER_INFO_FIELD_NAME.STREET]: {},
      [USER_INFO_FIELD_NAME.HOUSE]: {},
      [USER_INFO_FIELD_NAME.POSTAL_CODE]: {},
      [USER_INFO_FIELD_NAME.FULL_ADDRESS]: {
        country: '',
        city: '',
        settlement: '',
        kladr_id: '',
        street: '',
        house: '',
        postal_code: '',
      },
      [USER_INFO_FIELD_NAME.PHONE]: '',
      [USER_INFO_FIELD_NAME.FULL_NAME]: '',

      [ORDER_FIELD_NAME.PROMO_CODE]: '',
      [ORDER_FIELD_NAME.PROMO_DISCOUNT]: 0,
      [ORDER_FIELD_NAME.SDEK_POINT]: undefined,
      [ORDER_FIELD_NAME.SDEK_TARIFF]: undefined,
      [ORDER_FIELD_NAME.PRICE]: 0,
      [ORDER_FIELD_NAME.DELIVERY_TYPE]: -1,
    };
  }
  return (
    <BasketComponent
      isPending={isRequestPending(orderState)}
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
      //-------------
      orderError={isRequestError(orderState)}
      orderErrorMessage={getRequestErrorMessage(orderState)}
      orderSuccess={isRequestSuccess(orderState)}
    />
  );
}
