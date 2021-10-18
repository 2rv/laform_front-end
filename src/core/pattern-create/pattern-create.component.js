import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-create-components';
import { CREATE_PATTERN_FIELD_NAME } from './pattern-create.type';

export function CreatePatternComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialOption,
    initialValues,
    onSubmit,
    validation,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание выкройки" />
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <SectionLayout>
                  <ProductImages
                    {...formProps}
                    imagesArrayName={CREATE_PATTERN_FIELD_NAME.IMAGES}
                    imageFieldName={CREATE_PATTERN_FIELD_NAME.IMAGE}
                    title="PRODUCT_IMAGES.TITLE"
                  />
                  <FormComponent {...formProps} initialOption={initialOption} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && (
          <SuccessAlert tid="PATTERNS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
