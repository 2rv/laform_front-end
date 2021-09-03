import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-components';
import { PRINT_PATTERN_FIELD_NAME } from './patterns-create-print.type';

export function CreatePrintPatternComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,

    sizesInit,
    initialValues,
    onSubmit,
    validation,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание печатной выкройки" />
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
                    imagesArrayName={PRINT_PATTERN_FIELD_NAME.IMAGES}
                    imageFieldName={PRINT_PATTERN_FIELD_NAME.IMAGE}
                    title="Фотографии товара"
                  />
                  <FormComponent {...formProps} sizesInit={sizesInit} />
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
