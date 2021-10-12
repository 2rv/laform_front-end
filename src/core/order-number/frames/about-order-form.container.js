import { Formik } from 'formik';
import { AboutOrderFormComponent } from './about-order-form.component';

export function AboutOrderFormContainer(props) {
  const { onSubmit, initialValue, validate, statusOrderSelect, deliveryTypeOptions } = props;

  return (
    <Formik
      initialValues={initialValue}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formProps) => (
        <AboutOrderFormComponent
          statusOrderSelect={statusOrderSelect}
          deliveryTypeOptions={deliveryTypeOptions}
          {...formProps}
        />
      )}
    </Formik>
  );
}
