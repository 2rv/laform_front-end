import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-create-components';
import { ELECTRONIC_PATTERN_FIELD_NAME } from './patterns-create-electronic.type';

export function CreateElectronicPatternComponent(props) {
  const {
    initialValues,
    initialSizes,
    onSubmit,
    validation,
    //--------
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
        <TitlePrimary tid="PATTERNS.CREATE_ELECTRONIC.TITLE" />
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={onSubmit}
        >
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <SectionLayout>
                  <ProductImages
                    {...formProps}
                    imagesArrayName={ELECTRONIC_PATTERN_FIELD_NAME.IMAGES}
                    imageFieldName={ELECTRONIC_PATTERN_FIELD_NAME.IMAGE}
                    title="PRODUCT_IMAGES.TITLE"
                  />
                  <FormComponent initialSizes={initialSizes} {...formProps} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && (
          <SuccessAlert tid="PATTERNS.CREATE_ELECTRONIC.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
