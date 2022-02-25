import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary } from 'src/lib/element/button';
import { BasicField, TextareaField } from 'src/lib/element/field';
import { FeedbackComponentProps, FEEDBACK_FIELD_NAME } from './feedback.type';
import styled from 'styled-components';

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
          const {
            isValid,
            errors,
            values,
            handleSubmit,
            handleChange,
            handleBlur,
          } = formik;

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
                <FieldLayout type="double" adaptive>
                  <BasicField
                    titleTid="FEEDBACK.EMAIL_LABEL"
                    placeholderTid="FEEDBACK.EMAIL_PLACEHOLDER"
                    name={FEEDBACK_FIELD_NAME.EMAIL}
                    value={values[FEEDBACK_FIELD_NAME.EMAIL]}
                    error={errors[FEEDBACK_FIELD_NAME.EMAIL]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    type="submit"
                    tid="FEEDBACK.BUTTON_SEND_TEXT"
                    disabled={pending || !isValid}
                  />
                </FieldLayout>
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
const Button = styled(ButtonPrimary)`
  margin-top: 19px;
`;
