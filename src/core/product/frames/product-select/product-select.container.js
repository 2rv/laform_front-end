import { Formik } from 'formik';
import { ProductSelectComponent } from './product-select.component';

export function ProductSelectContainer(props) {
  const {
    options,
    optionsKeys,
    optionsTitles,

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
        <ProductSelectComponent
          options={options}
          optionsTitles={optionsTitles}
          optionsKeys={optionsKeys}
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
