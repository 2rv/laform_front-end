import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary } from 'src/lib/element/button';
import { TextareaField } from 'src/lib/element/field';
import { FeedbackComponentProps, FEEDBACK_FIELD_NAME } from './feedback.type';

export function FeedbackComponent(props: FeedbackComponentProps) {
  const {
    initialValues,
    validate,
    onSubmit,
    state: { pending, success, error },
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="FEEDBACK.TITLE" />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors, values, handleSubmit, handleChange, handleBlur } =
            formik;
          return (
            <form onSubmit={handleSubmit}>
              <SectionLayout type="SMALL">
                <TextareaField
                  titleTid="FEEDBACK.DESCRIPTION_LABEL"
                  placeholderTid="FEEDBACK.DESCRIPTION_PLACEHOLDER"
                  name={FEEDBACK_FIELD_NAME.DESCRIPTION}
                  value={values[FEEDBACK_FIELD_NAME.DESCRIPTION]}
                  error={errors[FEEDBACK_FIELD_NAME.DESCRIPTION]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  minHeight={100}
                />
                <ButtonPrimary
                  type="submit"
                  tid="FEEDBACK.BUTTON_SEND_TEXT"
                  disabled={pending}
                />
              </SectionLayout>
            </form>
          );
        }}
      </Formik>
      {success && <SuccessAlert tid="FEEDBACK.SUCCESS_MESSAGE" />}
      {error && <ErrorAlert tid={error} />}
    </SectionLayout>
  );
}
