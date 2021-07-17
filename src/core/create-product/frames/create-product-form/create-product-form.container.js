import { Formik } from 'formik';

export function CreateProductFormContainer(props) {
  const { fieldsData, children, validation, onSubmitForm } = props;
  const initialValues = Object.values(fieldsData)
    .flat()
    .reduce((acc, { name, value }) => {
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
        <form onSubmit={formProps.handlesubmit}>{children(formProps)}</form>
      )}
    </Formik>
  );
}
