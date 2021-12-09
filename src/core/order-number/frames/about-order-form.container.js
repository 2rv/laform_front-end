import { Formik } from 'formik';
import { AboutOrderFormComponent } from './about-order-form.component';

export function AboutOrderFormContainer(props) {
  const {
    onSubmit,
    initialValue,
    validate,
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
          isOrderNumberChangePending={isOrderNumberChangePending}
          isOrderNumberChangeSuccess={isOrderNumberChangeSuccess}
          {...formProps}
        />
      )}
    </Formik>
  );
}
