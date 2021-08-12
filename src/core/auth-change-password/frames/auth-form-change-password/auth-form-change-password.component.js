import { BasicField } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import {
  ContentLayout,
  FieldLayout,
  PageLayout,
  SectionLayout,
} from '../../../../lib/element/layout';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { ErrorAlert, SuccessAlert } from '../../../../lib/element/alert';

export function AuthFormChangePasswordComponent(props) {
  const {
    fieldPassword,
    fieldPasswordRepeat,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <ContentLayout vertical="center" horizontal="center">
      <PageLayout type="SMALL">
        <form onSubmit={handleSubmit}>
          <SectionLayout type="SMALL">
            <TitlePrimary tid="AUTH.CHANGE_PASSWORD.TITLE" />
            <SectionLayout type="TEXT">
              <BasicField
                titleTid="AUTH.CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
                placeholderTid="AUTH.CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
                name={fieldPassword}
                type="password"
                value={values[fieldPassword]}
                error={getFieldError(fieldPassword)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <BasicField
                titleTid="AUTH.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
                placeholderTid="AUTH.CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
                name={fieldPasswordRepeat}
                type="password"
                value={values[fieldPasswordRepeat]}
                error={getFieldError(fieldPasswordRepeat)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {(isError || errorMessage) && <ErrorAlert tid={errorMessage} />}
              {isSuccess && <SuccessAlert tid="AUTH.CHANGE_PASSWORD.SUCCESS" />}
            </SectionLayout>
            <ButtonPrimary
              tid="AUTH.CHANGE_PASSWORD.SUBMIT"
              type="submit"
              disabled={isSubmitDisabled()}
            />
            {isPending && <LoaderPrimary />}
          </SectionLayout>
        </form>
      </PageLayout>
    </ContentLayout>
  );
}
