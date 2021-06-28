import { Formik } from 'formik';

import { PATTERNS_FORM_FILTER_FIELD_KEY } from './patterns-form-filter.type';
import { PatternsFormFilterComponent } from './patterns-form-filter.component';

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
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <PatternsFormFilterComponent
          categoryOptions={categoryOptions}
          fieldCategory={CATEGORY_NAME}
          tagsOptions={tagsOptions}
          fieldTags={TAGS_NAME}
          fieldFindPatterns={FIND_PATTERNS_NAME}
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
