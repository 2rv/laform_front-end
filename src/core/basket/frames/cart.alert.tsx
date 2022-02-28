import { FieldLayout } from 'src/lib/element/layout';
import {
  ErrorAlert,
  InfoAlert,
  SuccessAlert,
  WarningAlert,
} from 'src/lib/element/alert';
import { CartAlertProps } from '../basket.type';

export function CartAlert(props: CartAlertProps) {
  const {
    orderError,
    orderErrorMessage,
    orderSuccess,
    emailConfirmedError,
    fullNameError,
    phoneError,
    postalCodeErrro,
    emailNotConfirmed,
    selectDiliveryType,
  } = props;

  return (
    <FieldLayout type="double" adaptive>
      {orderError && <ErrorAlert tid={orderErrorMessage} />}
      {postalCodeErrro && <ErrorAlert tid={postalCodeErrro} />}
      {emailConfirmedError && <WarningAlert tid={emailConfirmedError} />}
      {orderSuccess && <SuccessAlert tid="BASKET.FORM.CART_ALERT.SUCCESS" />}
      {fullNameError && (
        <WarningAlert tid="BASKET.FORM.CART_ALERT.NEED_FULLNAME" />
      )}
      {phoneError && <WarningAlert tid="BASKET.FORM.CART_ALERT.NEED_PHONE" />}
      {emailNotConfirmed && (
        <InfoAlert tid="BASKET.FORM.CART_ALERT.NEED_CONFIRM_EMAIL" />
      )}
      {selectDiliveryType && (
        <InfoAlert tid="BASKET.FORM.CART_ALERT.NEED_TYPE_DELIVERY" />
      )}
    </FieldLayout>
  );
}
