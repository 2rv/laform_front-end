import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent } from './frames';
import { ProductImages } from '../block-product-components';
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
    //--------
    programsInit,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание мастер-класса" />
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
                    title="Фотографии товара"
                  />
                  <FormComponent {...formProps} programsInit={programsInit} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && <SuccessAlert tid="Мастер-класс успешно создан" />}
        {isError && <ErrorAlert tid={errorMessage} />}
      </SectionLayout>
    </>
  );
}
