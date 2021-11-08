import { Formik } from 'formik';
import { AboutOrderFormComponent } from './about-order-form.component';

export function AboutOrderFormContainer(props) {
  const {
    onSubmit,
    initialValue,
    validate,
    deliveryTypeOptions,
    isOrderNumberChangePending,
    isOrderNumberChangeSuccess,
  } = props;

  return (
    <Formik
      initialValues={initialValue}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formProps) => (
        <AboutOrderFormComponent
          deliveryTypeOptions={deliveryTypeOptions}
          isOrderNumberChangePending={isOrderNumberChangePending}
          isOrderNumberChangeSuccess={isOrderNumberChangeSuccess}
          {...formProps}
        />
      )}
    </Formik>
  );
}
