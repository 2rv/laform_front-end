import { FieldLayout } from 'src/lib/element/layout';
import { ErrorAlert, SuccessAlert, WarningAlert } from 'src/lib/element/alert';
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
  } = props;

  return (
    <FieldLayout type="double" adaptive>
      {orderError && <ErrorAlert tid={orderErrorMessage} />}
      {postalCodeErrro && <ErrorAlert tid={postalCodeErrro} />}
      {orderSuccess && <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />}
      {emailConfirmedError && <WarningAlert tid={emailConfirmedError} />}
      {fullNameError && <WarningAlert tid="Необходимо указать ФИО" />}
      {phoneError && <WarningAlert tid="Необходимо указать номер телефона" />}
    </FieldLayout>
  );
}
