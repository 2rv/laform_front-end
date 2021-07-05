import { Formik } from 'formik';
import { ProductSelectComponent } from './product-select.component';

export function ProductSelectContainer(props) {
  const {
    optionItem,

    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const initialValue = optionItem.reduce((object, item) => {
    object[item.fieldName] = item.initial;
    return object;
  }, {});
  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <ProductSelectComponent
          optionItem={optionItem}
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
