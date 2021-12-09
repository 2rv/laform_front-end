import { Formik } from 'formik';
import { SuccessAlert } from 'src/lib/element/alert';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { FeedbackFormComponent } from './frames';
import { SEWING_GOODS_FIELD_NAME } from './feedback.type';
import { FooterPhone } from '../footer/footer.phone';

export function FeedbackComponent(props) {
  const { isAdmin, isPending, isSuccess, initialValues, validation, onSubmit } =
    props;

  return (
    <SectionLayout>
      <TitlePrimary tid="FEEDBACK.TITLE" />
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={onSubmit}
      >
        {(formProps) => {
          return (
            <form onSubmit={formProps.handleSubmit}>
              <SectionLayout>
                <FeedbackFormComponent {...formProps} />
              </SectionLayout>
            </form>
          );
        }}
      </Formik>
      {isSuccess && <SuccessAlert tid="FEEDBACK.SUCCESS_MESSAGE" />}
      {isAdmin && <FooterPhone />}
    </SectionLayout>
  );
}
