import { FormFilter } from '../../../lib/element/form-filter';

export function MasterClassesFormFilter(props) {
  const {
    findPlaceholderTid,
    categoryOptions,
    tagsOptions,
    initialValue,
    fieldName,

    onSubmit,
    validation,

    pending,
    success,
    error,
    errorMessage,
    filterProducts,
  } = props;

  return (
    <FormFilter
      findPlaceholderTid={findPlaceholderTid}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldNameFind={fieldName.FIND_INPUT}
      selectNameCategory={fieldName.CATEGORY}
      selectNameTags={fieldName.TAGS}
      initialValue={initialValue}
      validation={validation}
      onSubmit={onSubmit}
      pending={pending}
      success={success}
      error={error}
      errorMessage={errorMessage}
      filterProducts={filterProducts}
    />
  );
}
