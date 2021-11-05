import { Formik } from 'formik';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { SuccessAlert } from 'src/lib/element/alert';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { FeedbackFormComponent } from './frames';
import { SEWING_GOODS_FIELD_NAME } from './feedback.type';

export function FeedbackComponent(props) {
  const {
    isPending,
    isSuccess,
    initialValues,
    validation,
    onSubmit,
  } = props;

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
                <SelectImageBlock
                  titleTid="FEEDBACK.PHOTOS"
                  name={SEWING_GOODS_FIELD_NAME.IMAGES}
                  {...formProps}
                />
                <FeedbackFormComponent {...formProps} />
              </SectionLayout>
            </form>
          );
        }}
      </Formik>
      {isSuccess && (
        <SuccessAlert tid="FEEDBACK.SUCCESS_MESSAGE" />
      )}
    </SectionLayout>
  );
}
