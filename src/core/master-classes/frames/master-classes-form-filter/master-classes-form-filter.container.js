import { MASTER_CLASSES_FORM_FILTER_FIELD_KEY } from './master-classes-form-filter.type';
import { FormFilterContainer } from 'src/lib/element/form-filter';

export function MasterClassesFormFilterContainer(props) {
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

  const CATEGORY_NAME =
    fieldName[MASTER_CLASSES_FORM_FILTER_FIELD_KEY.CATEGORY];
  const TAGS_NAME = fieldName[MASTER_CLASSES_FORM_FILTER_FIELD_KEY.TAGS];
  const FIND_MASTER_CLASSES_NAME =
    fieldName[MASTER_CLASSES_FORM_FILTER_FIELD_KEY.FIND_MASTER_CLASSES];

  return (
    <FormFilterContainer
      initialValue={initialValue}
      placeholderTid={'MASTER_CLASSES.MASTER_CLASSES.FIELD.FIND_MASTER_CLASSES'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldCategory={CATEGORY_NAME}
      fieldTags={TAGS_NAME}
      fieldFind={FIND_MASTER_CLASSES_NAME}
      dataPending={dataPending}
      formPending={formPending}
      formSuccess={formSuccess}
      formError={formError}
      errorMessage={errorMessage}
    />
  );
}
