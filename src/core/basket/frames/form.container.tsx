import { Formik } from 'formik';
import { BasketFormContainerProps } from '../basket.type';
import { FormComponent } from './form.component';

export function FormContainer(props: BasketFormContainerProps) {
  const { initialValues, validate, onSubmit, ...otherProps } = props;
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <FormComponent formik={formik} {...otherProps} />
        </form>
      )}
    </Formik>
  );
}
