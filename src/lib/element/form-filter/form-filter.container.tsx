import { useFormik } from 'formik';
import { FormFilterComponent } from './form-filter.component';
import { FormFilterContainerPropsType } from './form-filter.type';

export function FormFilter(props: FormFilterContainerPropsType) {
  const {
    findPlaceholderTid,
    filterOptions,
    findFieldName,
    filterSelectName,
    setFilter,
    initialValue,
    onSubmit,
  } = props;

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmit,
  });
  setFilter(formik.values);
  return (
    <FormFilterComponent
      findPlaceholderTid={findPlaceholderTid}
      filterOptions={filterOptions}
      filterSelectName={filterSelectName}
      findFieldName={findFieldName}
      formik={formik}
    />
  );
}
