import { Formik } from 'formik';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { ARTICLE_FIELD_NAME } from './article-create.type';
import { FormComponent, DeleteProductComponent } from './frames';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { Divider } from 'src/lib/element/divider';

export function CreateArticleComponent(props) {
  const {
    pageLoading,
    isPending,
    isSuccess,
    isError,
    errorMessage,

    initialValues,
    onSubmit,
    validation,

    isEdit,
    updateIsPending,
    updateIsError,
    updateIsSuccess,
    updateErrorMessage,
    deleteProduct,
    deleteIsPending,
    deleteIsError,
    deleteErrorMessage,
  } = props;
  return (
    <>
      {(pageLoading || isPending || updateIsPending) && <LoaderPrimary />}
      <SectionLayout>
        <TitlePrimary tid="ARTICLE_CREATE_FORM.CREATING_AN_ARTICLE" />
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
                  <SelectImageBlock
                    titleTid="PRODUCT_IMAGES.TITLE"
                    name={ARTICLE_FIELD_NAME.IMAGES}
                    {...formProps}
                  />
                  <FormComponent isEdit={isEdit} {...formProps} />
                </SectionLayout>
              </form>
            );
          }}
        </Formik>
        {isSuccess && (
          <SuccessAlert tid="ARTICLE_CREATE_FORM.ARTICLE_SUCCESFULLY_CREATED" />
        )}
        {isError && <ErrorAlert tid={errorMessage} />}
        {updateIsSuccess && (
          <SuccessAlert tid="ARTICLE_CREATE_FORM.ARTICLE_SUCCESFULLY_UPDATED" />
        )}
        {updateIsError && <ErrorAlert tid={updateErrorMessage} />}
        <Divider />
        <DeleteProductComponent
          isEdit={isEdit}
          deleteProduct={deleteProduct}
          deleteIsPending={deleteIsPending}
          deleteIsError={deleteIsError}
          deleteErrorMessage={deleteErrorMessage}
        />
      </SectionLayout>
    </>
  );
}
