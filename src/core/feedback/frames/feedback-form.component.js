import { SectionLayout } from '../../../lib/element/layout';
import { ButtonPrimary } from '../../../lib/element/button';
import { TextareaField } from '../../../lib/element/field';
import { SEWING_GOODS_FIELD_NAME } from '../feedback.type';

export function FeedbackFormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <SectionLayout type="SMALL">
      <TextareaField
        titleTid="FEEDBACK.DESCRIPTION_LABEL"
        placeholderTid="FEEDBACK.DESCRIPTION_PLACEHOLDER"
        name={SEWING_GOODS_FIELD_NAME.DESCRIPTION}
        value={values[SEWING_GOODS_FIELD_NAME.DESCRIPTION]}
        error={getFieldError(SEWING_GOODS_FIELD_NAME.DESCRIPTION)}
        onChange={handleChange}
        onBlur={handleBlur}
        minHeight={100}
      />
      <ButtonPrimary
        type="submit"
        tid="FEEDBACK.BUTTON_SEND_TEXT"
      />
    </SectionLayout>
  );
}
