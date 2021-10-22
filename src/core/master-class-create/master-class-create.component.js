import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-create-components';
import { CREATE_MASTER_CLASS_FIELD_NAME } from './master-class-create.type';

export function CreateMasterClassComponent(props) {
  const {
    initialValues,
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
        <TitlePrimary tid="MASTER_CLASSES.CREATE.TITLE" />
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
                    imagesArrayName={CREATE_MASTER_CLASS_FIELD_NAME.IMAGES}
                    imageFieldName={CREATE_MASTER_CLASS_FIELD_NAME.IMAGE}
                    title="PRODUCT_IMAGES.TITLE"
                  />
                  <FormComponent {...formProps} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && (
          <SuccessAlert tid="MASTER_CLASSES.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
