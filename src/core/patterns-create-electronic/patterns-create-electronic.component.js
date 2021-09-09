import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-components';
import { ELECTRONIC_PATTERN_FIELD_NAME } from './patterns-create-electronic.type';

export function CreateElectronicPatternComponent(props) {
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
        <TitlePrimary tid="Создание электронной выкройки" />
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
                    title="Фотографии товара"
                  />
                  <FormComponent {...formProps} />
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