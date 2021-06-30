import { Formik } from 'formik';

import { PUBLICATION_FORM_FILTER_FIELD_KEY } from './publication-form-filter.type';
import { PublicationFormFilterComponent } from './publication-form-filter.component';

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
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <PublicationFormFilterComponent
          categoryOptions={categoryOptions}
          fieldCategory={CATEGORY_NAME}
          tagsOptions={tagsOptions}
          fieldTags={TAGS_NAME}
          fieldFindPublication={FIND_PUBLICATION_NAME}
          dataPending={dataPending}
          formPending={formPending}
          formSuccess={formSuccess}
          formError={formError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}
