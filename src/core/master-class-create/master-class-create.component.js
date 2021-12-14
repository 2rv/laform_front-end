import { Formik } from 'formik';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent, DeleteProductComponent } from './frames';
import { CREATE_MASTER_CLASS_FIELD_NAME } from './master-class-create.type';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { Divider } from 'src/lib/element/divider';

export function CreateMasterClassComponent(props) {
  const {
    deleteProduct,
    initialValues,
    onSubmit,
    validation,
    pageLoading,
    isEdit,
    //--------
    updateIsPending,
    updateIsError,
    updateIsSuccess,
    updateErrorMessage,
    //--------
    deleteIsPending,
    deleteIsError,
    deleteErrorMessage,
    //--------
    isPending,
    isSuccess,
    isError,
    errorMessage,
  } = props;
  return (
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
                <SelectImageBlock
                  titleTid="PRODUCT_IMAGES.TITLE"
                  name={CREATE_MASTER_CLASS_FIELD_NAME.IMAGES}
                  {...formProps}
                />
                <Divider />
                <FormComponent isEdit={isEdit} {...formProps} />
              </SectionLayout>
            </form>
          );
        }}
      </Formik>
      {isSuccess && (
        <SuccessAlert tid="MASTER_CLASSES.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
      )}
      {isError && <ErrorAlert tid={errorMessage} />}
      {updateIsSuccess && (
        <SuccessAlert tid="MASTER_CLASSES.CREATE.PRODUCT_SUCCESSFULLY_UPDATED" />
      )}
      {updateIsPending && <InfoAlert tid="Идёт сохранение" />}
      {isPending && <InfoAlert tid="Идёт создание" />}
      {updateIsError && <ErrorAlert tid={updateErrorMessage} />}
      {pageLoading && <LoaderPrimary />}
      <Divider />
      <DeleteProductComponent
        isEdit={isEdit}
        deleteProduct={deleteProduct}
        deleteIsPending={deleteIsPending}
        deleteIsError={deleteIsError}
        deleteErrorMessage={deleteErrorMessage}
      />
    </SectionLayout>
  );
}
