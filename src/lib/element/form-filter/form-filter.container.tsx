import { Formik } from 'formik';
import { FormFilterComponent } from './form-filter.component';
import { FormFilterContainerPropsType } from './form-filter.type';

export function FormFilter(props: FormFilterContainerPropsType) {
  const {
    findPlaceholderTid,
    filterOptions,
    findFieldName,
    filterSelectName,

    initialValue,
    onSubmit,
  } = props;
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      {(formProps) => (
        <FormFilterComponent
          findPlaceholderTid={findPlaceholderTid}
          filterOptions={filterOptions}
          filterSelectName={filterSelectName}
          findFieldName={findFieldName}
          {...formProps}
        />
      )}
    </Formik>
  );
}
