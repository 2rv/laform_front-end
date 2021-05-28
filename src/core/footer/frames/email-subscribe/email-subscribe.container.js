import { Formik } from 'formik';

import { SUBSCRIBE_FORM_FIELD_KEY } from './email-subscribe.type';
import { EmailSubscribeComponent } from './email-subscribe.component';

export function EmailSubscribeContainer(props) {
  const {
    className,

    fieldName,
    initialValue,
    validation,
    onSubmitForm,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  const EMAIL_NAME = fieldName[SUBSCRIBE_FORM_FIELD_KEY.EMAIL];

  return (
    <Formik
      initialValues={initialValue}
      validate={validation}
      onSubmit={onSubmitForm}
    >
      {(formProps) => (
        <EmailSubscribeComponent
          className={className}
          fieldEmail={EMAIL_NAME}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
          errorMessage={errorMessage}
          {...formProps}
        />
      )}
    </Formik>
  );
}