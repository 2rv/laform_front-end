import {
  FormikHandlers,
  FormikHelpers,
  FormikState,
  FormikConfig,
} from 'formik';
import { TableItemType } from 'src/lib/common/block-table/table.type';
import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
} from 'src/lib/basic-types';
import { basicTariffType } from 'src/lib/common/block-sdek-tarifflist';
import { userInfoValues } from '../settings-user-info';
export enum BASKET_ACTION_TYPE {
  PRODUCT_ADD_PENDING = 'BASKET_ACTION_TYPE.PRODUCT_ADD_PENDING',
  PRODUCT_ADD_SUCCESS = 'BASKET_ACTION_TYPE.PRODUCT_ADD_SUCCESS',
  PRODUCT_ADD_ERROR = 'BASKET_ACTION_TYPE.PRODUCT_ADD_ERROR',

  CREATE_ORDER_PENDING = 'BASKET_ACTION_TYPE.CREATE_ORDER_PENDING',
  CREATE_ORDER_SUCCESS = 'BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR = 'BASKET_ACTION_TYPE.CREATE_ORDER_ERROR',

  CHANGE_BASKET = 'BASKET_ACTION_TYPE.CHANGE_BASKET',
  ADD_TO_BASKET = 'BASKET_ACTION_TYPE.ADD_TO_BASKET',
  INIT_BASKET = 'BASKET_ACTION_TYPE.INIT_BASKET',
}
export enum ORDER_FIELD_NAME {
  EMAIL = 'email',
  DESCRIPTION = 'comment',
  PROMO_CODE = 'promoCode',
  PROMO_DISCOUNT = 'promoCodeDiscount',
  EMAIL_CONFIRM_CODE = 'emailConfirmCode',
  EMAIL_CONFIRMED = 'emailConfirmed',
  SDEK_POINT = 'sdekPoint',
  SDEK_TARIFF = 'sdekTariff',
  PRICE = 'price',
}
export interface formikValues extends userInfoValues {
  [ORDER_FIELD_NAME.EMAIL]: string;
  [ORDER_FIELD_NAME.DESCRIPTION]: string;
  [ORDER_FIELD_NAME.PROMO_CODE]: string;
  [ORDER_FIELD_NAME.PROMO_DISCOUNT]: number;
  [ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]: string;
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: boolean;
  [ORDER_FIELD_NAME.PRICE]: number;
  [ORDER_FIELD_NAME.SDEK_POINT]: any;
  [ORDER_FIELD_NAME.SDEK_TARIFF]: any;
}

export interface addToCartDataType {
  id: string;
  type: 0 | 1 | 2 | 3;
  optionId?: string;
  count?: number;
  length?: number;
}
export interface changeCartataType {
  id: string;
  indexId: string;
  optionId?: string;
  count?: number;
  length?: number;
}
export interface basketStateType {
  id: string;
  type: number;
  indexId: string;
  optionId: string;
  count: number;
  length: number;
  isCount: false | true;
  isLength: false | true;
  masterClassId: BasicMasterClassType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
}
export interface BasketComponentProps
  extends CartTablesProps,
    BasketFormContainerProps {
  isEmpty: boolean;
}
export interface CartTablesProps {
  changeItem: Function;
  deleteItem: Function;
  sewingProducts: TableItemType[];
  masterProducts: TableItemType[];
  patternProducts: TableItemType[];
}
export interface BasketFormContainerProps
  extends FormikConfig<formikValues>,
    BasketFormProps {}
export interface BasketFormComponentProps extends BasketFormProps {
  formik: FormikHandlers &
    FormikHelpers<formikValues> &
    FormikState<formikValues>;
}
export interface CartEmailProps {
  formik: FormikHandlers &
    FormikHelpers<formikValues> &
    FormikState<formikValues>;
  isAuth: boolean;
}
export interface CartPromoCodeProps {
  formik: FormikHandlers &
    FormikHelpers<formikValues> &
    FormikState<formikValues>;
}
export interface CartPriceProps {
  price: number;
  promoDiscount: number;
  deliveryInfo: basicTariffType;
}
export interface BasketFormProps extends AlertProps {
  isAuth: boolean;
  isPending: boolean;
  basketPrice: number;
  basketCount: number;
  orderError: boolean;
  orderErrorMessage: string;
  orderSuccess: boolean;
}
export interface CartAlertProps extends AlertProps {
  emailConfirmedError: any;
}
export interface AlertProps {
  orderError: boolean;
  orderErrorMessage: string;
  orderSuccess: boolean;
}
