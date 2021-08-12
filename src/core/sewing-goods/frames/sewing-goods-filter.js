import { FormFilter } from '../../../lib/element/form-filter';

export function SewingGoodsFilter(props) {
  const {
    categoryOptions,
    tagsOptions,
    initialValue,
    fieldName,

    onSubmit,
    validation,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  return (
    <FormFilter
      findPlaceholderTid={'SEWING_GOODS.SEWING_GOODS.FIELD.FIND_SEWING_GOODS'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldNameFind={fieldName.FIND_INPUT}
      selectNameCategory={fieldName.CATEGORY}
      selectNameTags={fieldName.TAGS}
      initialValue={initialValue}
      validation={validation}
      onSubmit={onSubmit}
      pending={dataPending || formPending}
      success={formSuccess}
      error={formError}
      errorMessage={errorMessage}
    />
  );
}
