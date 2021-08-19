import { Formik } from 'formik';
import { FormFilterComponent } from './form-filter.component';
import { FormFilterContainerPropsType } from './form-filter.type';

export function FormFilter(props: FormFilterContainerPropsType) {
  const {
    findPlaceholderTid,
    categoryOptions,
    tagsOptions,

    fieldNameFind,
    selectNameCategory,
    selectNameTags,

    initialValue,
    validation,
    onSubmit,

    pending,
    success,
    error,
    errorMessage,
    filterProducts,
  } = props;
  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmit}
    >
      {(formProps) => (
        <FormFilterComponent
          findPlaceholderTid={findPlaceholderTid}
          categoryOptions={categoryOptions}
          tagsOptions={tagsOptions}
          selectNameCategory={selectNameCategory}
          selectNameTags={selectNameTags}
          fieldNameFind={fieldNameFind}
          pending={pending}
          success={success}
          error={error}
          errorMessage={errorMessage}
          filterProducts={filterProducts}
          {...formProps}
        />
      )}
    </Formik>
  );
}
