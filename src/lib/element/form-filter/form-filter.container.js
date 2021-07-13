import { FormFilterComponent } from './form-filter.component';
import { Formik } from 'formik';

export function FormFilterContainer(props) {
  const {
    placeholderTid,

    categoryOptions,
    tagsOptions,
    fieldCategory,
    fieldTags,
    fieldFind,

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
        <FormFilterComponent
          placeholderTid={placeholderTid}
          categoryOptions={categoryOptions}
          tagsOptions={tagsOptions}
          fieldCategory={fieldCategory}
          fieldTags={fieldTags}
          fieldFind={fieldFind}
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
