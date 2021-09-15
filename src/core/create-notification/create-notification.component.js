import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';

export function CreateNotificationComponent(props) {
  const {
    initialValues,
    onSubmit,
    validation,
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="CREATE_NOTIFICATION.TITLE" />
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={onSubmit}
        >
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <SectionLayout>
                  <FormComponent
                    pageLoading={pageLoading}
                    isPending={isPending}
                    {...formProps}
                  />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && <SuccessAlert tid="CREATE_NOTIFICATION.NOTIFICATION_SUCCESSFULLY_SENDED" />}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
