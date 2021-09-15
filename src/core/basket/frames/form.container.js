import { Formik } from 'formik';
import { SectionLayout, FieldLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary } from '../../../lib/element/button';
import { FormComponent } from './form.component';
import { CartPrice } from './cart.price';
import { ORDER_FIELD_NAME } from '../basket.type';

export function FormContainer(props) {
  const {
    onSubmit,
    promoSuccess,
    initialValues,
    validation,
    pageLoading,
    isPending,
    isError,
    errorMessage,
    isSuccess,
    diliveryOptions,
    paymentMethodOptions,
  } = props;
  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formProps) => {
        return (
          <form>
            <SectionLayout>
              <TitlePrimary tid="BASKET.FORM.TITLE" />
              <FormComponent
                diliveryOptions={diliveryOptions}
                paymentMethodOptions={paymentMethodOptions}
                {...formProps}
              />
              <SectionLayout type="SMALL">
                <CartPrice values={formProps.values} />
                <FieldLayout type="double" adaptive>
                  <ButtonPrimary
                    tid="BASKET.FORM.FOOTER.CONFIRM_ORDER"
                    disabled={pageLoading || isPending}
                  />
                </FieldLayout>
              </SectionLayout>
              {isSuccess && (
                <SuccessAlert tid="BASKET.FORM.FORM_SEND_SUCCESS" />
              )}
              {promoSuccess && (
                <SuccessAlert
                  tid="BASKET.FORM.PROMO_CODE_SUCCESS"
                  tvalue={{
                    discount: formProps.values[ORDER_FIELD_NAME.PROMO_DISCOUNT],
                  }}
                />
              )}
              {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
              {(isPending || pageLoading) && <LoaderPrimary />}
            </SectionLayout>
          </form>
        );
      }}
    </Formik>
  );
}
