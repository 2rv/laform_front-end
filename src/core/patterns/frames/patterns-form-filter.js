import { FormFilter } from '../../../lib/element/form-filter';

export function PatternsFormFilter(props) {
  const {
    categoryOptions,
    tagsOptions,
    initialValue,
    fieldName,

    onSubmitForm,
    validation,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  return (
    <FormFilter
      findPlaceholderTid={'PATTERNS.PATTERNS.FIELD.FIND_PATTERNS'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldNameFind={fieldName.FIND_INPUT}
      selectNameCategory={fieldName.CATEGORY}
      selectNameTags={fieldName.TAGS}
      initialValue={initialValue}
      validation={validation}
      onSubmit={onSubmitForm}
      pending={dataPending || formPending}
      success={formSuccess}
      error={formError}
      errorMessage={errorMessage}
    />
  );
}
