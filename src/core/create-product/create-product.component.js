import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { AddImageComponent, ProductFormComponent } from './frames';

export function CreateProductComponent(props) {
  const {
    initialValues,
    onSubmitForm,
    validation,
    //--------
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    //--------
    initialData,
    selectOptionsData,
  } = props;
  return (
    <>
      {(pageLoading || isPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="Создание товара" />
        <Formik
          initialValues={initialValues}
          validate={validation}
          onSubmit={onSubmitForm}
          enableReinitialize={true}
        >
          {(formProps) => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <SectionLayout>
                  <AddImageComponent {...formProps} />
                  <ProductFormComponent
                    {...formProps}
                    initialData={initialData}
                    selectOptionsData={selectOptionsData}
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
