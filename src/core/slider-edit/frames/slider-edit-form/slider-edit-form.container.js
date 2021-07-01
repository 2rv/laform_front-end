import { SliderEditFormComponent } from './slider-edit-form.component';
import { Formik } from 'formik';

export function SliderEditFormContainer(props) {
  const {
    buttonColorOptions,
    buttonTextColorOptions,
    textColorOptions,

    fieldTextName,
    fieldTextColorName,
    fieldButtonTextName,
    fieldButtonColorName,
    fieldButtonTextColorName,

    initialValue,
    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;
  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <SliderEditFormComponent
          buttonColorOptions={buttonColorOptions}
          buttonTextColorOptions={buttonTextColorOptions}
          textColorOptions={textColorOptions}
          fieldTextName={fieldTextName}
          fieldTextColorName={fieldTextColorName}
          fieldButtonTextName={fieldButtonTextName}
          fieldButtonColorName={fieldButtonColorName}
          fieldButtonTextColorName={fieldButtonTextColorName}
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
