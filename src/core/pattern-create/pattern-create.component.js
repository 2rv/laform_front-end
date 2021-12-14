import { Formik } from 'formik';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { FormComponent, DeleteProductComponent } from './frames';
import { CREATE_PATTERN_FIELD_NAME } from './pattern-create.type';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { Divider } from 'src/lib/element/divider';

export function CreatePatternComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialOption,
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
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.CREATE.TITLE" />
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
                  name={CREATE_PATTERN_FIELD_NAME.IMAGES}
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
        <SuccessAlert tid="PATTERNS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
      )}
      {updateIsSuccess && (
        <SuccessAlert tid="PATTERNS.CREATE.PRODUCT_SUCCESSFULLY_UPDATED" />
      )}
      {isError && <ErrorAlert tid={errorMessage} />}
      {updateIsError && <ErrorAlert tid={updateErrorMessage} />}
      {pageLoading && <LoaderPrimary />}
      {isPending && <InfoAlert tid="Идёт сохранение, подождите" />}
      {updateIsPending && <InfoAlert tid="Идёт обновление, подождите" />}
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
