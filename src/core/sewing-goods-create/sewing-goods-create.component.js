import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-create-components';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';

export function CreateSewingGoodsComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    //--------
    initialOption,
    initialValues,
    onSubmit,
    validation,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="SEWING_GOODS.CREATE.TITLE" />
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
                    images={formProps.values[SEWING_GOODS_FIELD_NAME.IMAGES]}
                    imagesArrayName={SEWING_GOODS_FIELD_NAME.IMAGES}
                    imageFieldName={SEWING_GOODS_FIELD_NAME.IMAGE}
                    title="PRODUCT_IMAGES.TITLE"
                  />
                  <FormComponent {...formProps} initialOption={initialOption} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && (
          <SuccessAlert tid="SEWING_GOODS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
