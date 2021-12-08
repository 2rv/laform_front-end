import { FieldLayout } from 'src/lib/element/layout';
import { ErrorAlert, SuccessAlert, WarningAlert } from 'src/lib/element/alert';
import { CartAlertProps } from '../basket.type';

export function CartAlert(props: CartAlertProps) {
  const { orderError, orderErrorMessage, orderSuccess, emailConfirmedError } =
    props;

  return (
    <FieldLayout type="double" adaptive>
      {orderError && <ErrorAlert tid={orderErrorMessage} />}
      {orderSuccess && <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />}
      {emailConfirmedError && <WarningAlert tid={emailConfirmedError} />}
    </FieldLayout>
  );
}
