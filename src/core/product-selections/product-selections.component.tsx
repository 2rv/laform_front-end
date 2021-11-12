import { SectionLayout } from 'src/lib/element/layout';
import { Formik } from 'formik';
import { CompilationArray } from './frames';
import { ProductSelectionsComponentProps } from './product-selections.type';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { LoaderPrimary } from 'src/lib/element/loader';

export function ProductSelectionsComponent(
  props: ProductSelectionsComponentProps,
) {
  const {
    uploadSuccess,
    uploadPending,
    uploadError,
    uploadErrorMessage,

    listItems,
    initialValues,
    onSubmit,
    initialBlock,
    compilationDelete,

    deleteSuccess,
    deletePending,
    deleteError,
    deleteErrorMessage,
  } = props;
  return (
    <SectionLayout type="SMALL">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <CompilationArray
                initialBlock={initialBlock}
                listItems={listItems}
                formik={formik}
                compilationDelete={compilationDelete}
              />
            </form>
          );
        }}
      </Formik>
      {(uploadPending || deletePending) && <LoaderPrimary />}
      {uploadSuccess && <SuccessAlert tid="Подборки успешно сохранены" />}
      {uploadError && <ErrorAlert tid={uploadErrorMessage} />}
      {deleteSuccess && <SuccessAlert tid="Блок успешно удалён" />}
      {deleteError && <ErrorAlert tid={deleteErrorMessage} />}
    </SectionLayout>
  );
}
