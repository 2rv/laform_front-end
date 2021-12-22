import { Formik } from 'formik';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { Divider } from 'src/lib/element/divider';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { FormComponent, DeleteProductComponent } from './frames';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';

export function CreateSewingGoodsComponent(props) {
  const {
    pageLoading,
    isEdit,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    updateIsPending,
    updateIsError,
    updateIsSuccess,
    updateErrorMessage,
    deleteProduct,
    deleteIsPending,
    deleteIsError,
    deleteErrorMessage,
    //--------
    initialOption,
    initialValues,
    onSubmit,
    validation,
  } = props;
  return (
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
                <SelectImageBlock
                  titleTid="PRODUCT_IMAGES.TITLE"
                  name={SEWING_GOODS_FIELD_NAME.IMAGES}
                  {...formProps}
                />
                <Divider />
                <FormComponent
                  {...formProps}
                  isEdit={isEdit}
                  initialOption={initialOption}
                />
              </SectionLayout>
            </form>
          );
        }}
      </Formik>
      {isSuccess && (
        <SuccessAlert tid="SEWING_GOODS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
      )}
      {updateIsSuccess && (
        <SuccessAlert tid="SEWING_GOODS.CREATE.PRODUCT_SUCCESSFULLY_UPDATED" />
      )}
      {isError && <ErrorAlert tid={errorMessage} />}
      {updateIsError && <ErrorAlert tid={updateErrorMessage} />}
      {isPending && <InfoAlert tid="Идёт создание, подождите" />}
      {updateIsPending && <InfoAlert tid="Идёт сохранение, подождите" />}
      {pageLoading && <LoaderPrimary />}
      {isEdit && <Divider />}
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
