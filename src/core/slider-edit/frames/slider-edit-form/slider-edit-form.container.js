import { SliderEditFormComponent } from './slider-edit-form.component';
import { Formik } from 'formik';

export function SliderEditFormContainer(props) {
  const {
    slideFieldsData,

    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const initialValues = slideFieldsData.reduce((acc, { name, value }) => {
    acc[name] = value;
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <SliderEditFormComponent
          slideFieldsData={slideFieldsData}
          dataPending={dataPending}
          formPending={formPending}
          formSuccess={formSuccess}
          formError={formError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}
