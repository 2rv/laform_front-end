import {
  FormikHandlers,
  FormikHelpers,
  FormikState,
  FormikConfig,
  FormikErrors,
} from 'formik';
import {
  TableItemData,
  ChangeItemFnType,
  DeleteItemFnType,
} from 'src/lib/common/block-table';
import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  DELIVERY_TYPE,
} from 'src/lib/basic-types';
import { basicTariffType } from 'src/lib/common/block-sdek-tarifflist';
import { userInfoValues } from '../settings-user-info';
import { basicSdekPoints } from 'src/lib/common/block-sdek-points';

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
  DELIVERY_TYPE = 'deliveryType',
}
export interface formikValues extends userInfoValues {
  [ORDER_FIELD_NAME.EMAIL]: string;
  [ORDER_FIELD_NAME.DESCRIPTION]: string;
  [ORDER_FIELD_NAME.PROMO_CODE]: string;
  [ORDER_FIELD_NAME.PROMO_DISCOUNT]: number;
  [ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]: string;
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: boolean;
  [ORDER_FIELD_NAME.PRICE]: number;
  [ORDER_FIELD_NAME.SDEK_POINT]: basicSdekPoints | undefined;
  [ORDER_FIELD_NAME.SDEK_TARIFF]: basicTariffType | undefined;
  [ORDER_FIELD_NAME.DELIVERY_TYPE]: DELIVERY_TYPE;
}
type FormikObjType = FormikHandlers &
  FormikHelpers<formikValues> &
  FormikState<formikValues> &
  FormikErrors<formikValues>;
export interface addToCartDataType {
  id: string;
  type: 0 | 1 | 2 | 3;
  optionId?: string;
  count?: number;
  length?: number;
}
export interface basketStateType {
  id: string;
  type: 0 | 1 | 2 | 3;
  indexId: string;
  optionId: string;
  count: number;
  length: number;
  isCount: boolean;
  isLength: boolean;
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
  changeItem: ChangeItemFnType;
  deleteItem: DeleteItemFnType;

  sewingProducts: TableItemData[];
  masterProducts: TableItemData[];
  patternProducts: TableItemData[];
}
export interface BasketFormContainerProps
  extends FormikConfig<formikValues>,
    BasketFormProps {}

export interface BasketFormComponentProps extends BasketFormProps {
  formik: FormikObjType;
}
export interface CartEmailProps {
  formik: FormikObjType;
  isAuth: boolean;
}
export interface CartPromoCodeProps {
  formik: FormikObjType;
}
export interface CartPriceProps {
  price: number;
  promoDiscount: number;
  deliveryInfo: basicTariffType | undefined;
  deliveryType: -1 | 0 | 1 | 2;
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
  fullNameError: any;
  phoneError: any;
  postalCodeErrro: any;
  emailNotConfirmed: boolean;
  selectDiliveryType: boolean;
}
export interface AlertProps {
  orderError: boolean;
  orderErrorMessage: string;
  orderSuccess: boolean;
}
