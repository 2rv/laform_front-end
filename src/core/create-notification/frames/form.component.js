import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ButtonPrimary } from '../../../lib/element/button';
import { BasicField } from '../../../lib/element/field';
import { CREATE_NOTIFICATION_FIELD_NAME } from '../create-notification.type';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';

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
            titleTid="CREATE_NOTIFICATION.FIELD_TITLE"
            placeholderTid="CREATE_NOTIFICATION.FIELD_PLACEHOLDER"
            name={CREATE_NOTIFICATION_FIELD_NAME.SUBJECT}
            value={values[CREATE_NOTIFICATION_FIELD_NAME.SUBJECT]}
            error={getFieldError(CREATE_NOTIFICATION_FIELD_NAME.SUBJECT)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
      </SectionLayout>
      <BlockReactEditor
        handleChange={setEditorData(
          CREATE_NOTIFICATION_FIELD_NAME.NOTIFICATION,
        )}
      />
      <FieldLayout type="double" adaptive>
        <ButtonPrimary
          tid="CREATE_NOTIFICATION.BUTTON_CREATE"
          type="submit"
          disabled={isSubmitDisabled()}
        />
      </FieldLayout>
    </SectionLayout>
  );
}
