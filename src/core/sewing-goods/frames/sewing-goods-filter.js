import { FormFilter } from '../../../lib/element/form-filter';

export function SewingGoodsFilter(props) {
  const {
    findPlaceholderTid,
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
    filterProducts,
    sortProductsByDate,
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
      pending={dataPending || formPending}
      success={formSuccess}
      error={formError}
      errorMessage={errorMessage}
      filterProducts={filterProducts}
      sortProductsByDate={sortProductsByDate}
    />
  );
}
