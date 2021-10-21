import { FieldLayout } from '../../../lib/element/layout';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function CartAlert(props) {
  const {
    discount,
    diliveryMethodError,

    userInfoError,
    userInfoErrorMessage,
    userInfoSuccess, // нет нужды

    orderError,
    orderErrorMessage,
    orderSuccess,

    promoCodeError,
    promoCodeErrorMessage,
    promoCodeSuccess,

    sendEmailCodeError,
    sendEmailCodeErrorMessage,
    sendEmailCodeSuccess,

    confirmEmailCodeError,
    confirmEmailCodeErrorMessage,
    confirmEmailCodeSuccess,
  } = props;

  return (
    <FieldLayout type="double" adaptive>
      {userInfoError && <ErrorAlert tid={userInfoErrorMessage} />}

      {orderError && <ErrorAlert tid={orderErrorMessage} />}
      {orderSuccess && <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />}

      {promoCodeError && <ErrorAlert tid={promoCodeErrorMessage} />}
      {promoCodeSuccess && (
        <SuccessAlert
          tid="BASKET.FORM.PROMO_CODE_SUCCESS"
          tvalue={{ discount }}
        />
      )}
      {diliveryMethodError && (
        <ErrorAlert tid="Необходимо выбрать способ доставки" />
      )}
      {sendEmailCodeError && <ErrorAlert tid={sendEmailCodeErrorMessage} />}
      {sendEmailCodeSuccess && (
        <SuccessAlert tid="BASKET.FORM.EMAIL_CODE_SENT_SUCCESS" />
      )}

      {confirmEmailCodeError && (
        <ErrorAlert tid={confirmEmailCodeErrorMessage} />
      )}
      {confirmEmailCodeSuccess && (
        <SuccessAlert tid="BASKET.FORM.EMAIL_VERIFICATED_SUCCESS" />
      )}
    </FieldLayout>
  );
}
