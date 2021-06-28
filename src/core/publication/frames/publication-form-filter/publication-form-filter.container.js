import { PUBLICATION_FORM_FILTER_FIELD_KEY } from './publication-form-filter.type';
import { FormFilterContainer } from '../../../../lib/element/form-filter';

export function PublicationFormFilterContainer(props) {
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
  const CATEGORY_NAME = fieldName[PUBLICATION_FORM_FILTER_FIELD_KEY.CATEGORY];
  const TAGS_NAME = fieldName[PUBLICATION_FORM_FILTER_FIELD_KEY.TAGS];
  const FIND_PUBLICATION_NAME =
    fieldName[PUBLICATION_FORM_FILTER_FIELD_KEY.FIND_PUBLICATION];
  return (
    <FormFilterContainer
      initialValue={initialValue}
      placeholderTid={'PUBLICATION.PUBLICATION.FIELD.FIND_PUBLICATION'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldCategory={CATEGORY_NAME}
      fieldTags={TAGS_NAME}
      fieldFind={FIND_PUBLICATION_NAME}
      dataPending={dataPending}
      formPending={formPending}
      formSuccess={formSuccess}
      formError={formError}
      errorMessage={errorMessage}
    />
  );
}
