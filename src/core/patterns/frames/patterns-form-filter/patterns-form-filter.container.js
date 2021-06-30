import { PATTERNS_FORM_FILTER_FIELD_KEY } from './patterns-form-filter.type';
import { FormFilterContainer } from '../../../../lib/element/form-filter';

export function PatternsFormFilterContainer(props) {
  const {
    categoryOptions,
    tagsOptions,

    fieldName,
    initialValue,
    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const CATEGORY_NAME = fieldName[PATTERNS_FORM_FILTER_FIELD_KEY.CATEGORY];
  const TAGS_NAME = fieldName[PATTERNS_FORM_FILTER_FIELD_KEY.TAGS];
  const FIND_PATTERNS_NAME =
    fieldName[PATTERNS_FORM_FILTER_FIELD_KEY.FIND_PATTERNS];
  return (
    <FormFilterContainer
      initialValue={initialValue}
      placeholderTid={'PATTERNS.PATTERNS.FIELD.FIND_PATTERNS'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldCategory={CATEGORY_NAME}
      fieldTags={TAGS_NAME}
      fieldFind={FIND_PATTERNS_NAME}
      dataPending={dataPending}
      formPending={formPending}
      formSuccess={formSuccess}
      formError={formError}
      errorMessage={errorMessage}
    />
  );
}
