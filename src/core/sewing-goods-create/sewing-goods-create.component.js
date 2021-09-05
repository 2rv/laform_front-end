import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-components';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';

export function CreateSewingGoodsComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    //--------
    initialSizes,
    initialColors,
    initialValues,
    onSubmit,
    validation,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание товара для шитья" />
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
                    imagesArrayName={SEWING_GOODS_FIELD_NAME.IMAGES}
                    imageFieldName={SEWING_GOODS_FIELD_NAME.IMAGE}
                    title="Фотографии товара"
                  />
                  <FormComponent
                    {...formProps}
                    initialColors={initialColors}
                    initialSizes={initialSizes}
                  />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && <SuccessAlert tid="Товар успешно создан" />}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
