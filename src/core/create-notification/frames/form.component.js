import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ButtonPrimary } from '../../../lib/element/button';
import { BasicField } from '../../../lib/element/field';
import { CREATE_NOTIFICATION_FIELD_NAME } from '../create-notification.type';
import { BlockEditor } from '../../block-editor';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    pageLoading,
    isPending,
    isValid,
    isSubmitting,
  } = props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);
  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : pageLoading || isPending || !isValid || isSubmitting;
  };

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="Тема письма"
            placeholderTid="Например: Новые товары в разделе мастер-классы"
            name={CREATE_NOTIFICATION_FIELD_NAME.SUBJECT}
            value={values[CREATE_NOTIFICATION_FIELD_NAME.SUBJECT]}
            error={getFieldError(CREATE_NOTIFICATION_FIELD_NAME.SUBJECT)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
      </SectionLayout>
      <BlockEditor
        notification={true}
        formikOnChange={setEditorData(
          CREATE_NOTIFICATION_FIELD_NAME.NOTIFICATION,
        )}
      />
      <FieldLayout type="double" adaptive>
        <ButtonPrimary
          tid="Создать"
          type="submit"
          disabled={isSubmitDisabled()}
        />
      </FieldLayout>
    </SectionLayout>
  );
}
