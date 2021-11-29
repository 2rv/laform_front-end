import { FieldLayout } from 'src/lib/element/layout';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { CartAlertProps } from '../basket.type';

export function CartAlert(props: CartAlertProps) {
  const {
    userInfoError,
    userInfoErrorMessage,
    orderError,
    orderErrorMessage,
    orderSuccess,
    emailConfirmedError,
  } = props;

  return (
    <FieldLayout type="double" adaptive>
      {userInfoError && <ErrorAlert tid={userInfoErrorMessage} />}
      {orderError && <ErrorAlert tid={orderErrorMessage} />}
      {orderSuccess && <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />}
      {emailConfirmedError && <ErrorAlert tid="Необходимо подтердить почту" />}
    </FieldLayout>
  );
}
