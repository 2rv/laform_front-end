import { Formik } from 'formik';
import { validate } from 'src/main/validate/validate.core';
import { required } from 'src/main/validate/validate.service';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { TitlePrimary } from 'src/lib/element/title';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { ButtonPrimary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { MailingComponentProps } from './mailing.type';

export function MailingComponent(props: MailingComponentProps) {
  const {
    state: { createPending, createSuccess, createError },
    onSubmit,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="CREATE_NOTIFICATION.TITLE" />
      <Formik
        initialValues={{
          subject: '',
          content: { blocks: [] },
        }}
        validate={(values) => validate(values, { subject: [required] })}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const {
            errors,
            touched,
            values,
            handleSubmit,
            setFieldValue,
            handleBlur,
            handleChange,
          } = formik;

          return (
            <form onSubmit={handleSubmit}>
              <SectionLayout>
                {createPending && <CenteredSpinner />}
                <BasicField
                  titleTid="CREATE_NOTIFICATION.FIELD_TITLE"
                  placeholderTid="CREATE_NOTIFICATION.FIELD_PLACEHOLDER"
                  name={'subject'}
                  value={values.subject}
                  error={errors.subject && touched.subject && errors.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <BlockReactEditor
                  handleChange={(editorData) =>
                    setFieldValue('content', editorData)
                  }
                />
                <FieldLayout type="double" adaptive>
                  <ButtonPrimary
                    tid="CREATE_NOTIFICATION.BUTTON_CREATE"
                    type="submit"
                    disabled={createPending}
                  />
                  <InfoAlert tid="CREATE_NOTIFICATION.NO_SUPPORT_TABLE" />
                </FieldLayout>
              </SectionLayout>
            </form>
          );
        }}
      </Formik>
      {createSuccess && (
        <SuccessAlert tid="CREATE_NOTIFICATION.NOTIFICATION_SUCCESSFULLY_SENDED" />
      )}
      {createError && <ErrorAlert tid={createError} />}
    </SectionLayout>
  );
}
