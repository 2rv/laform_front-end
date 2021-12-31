import { Formik } from 'formik';
import { FieldArray } from 'formik';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { ProductSelectionsComponentProps } from './products-compilation.type';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { ProductsCompilationBlock } from './products-compilation.block';

export function ProductsCompilationComponent(
  props: ProductSelectionsComponentProps,
) {
  const { state, initialBlock, initialValues, onSubmit, onDelete } = props;
  const {
    getPending,
    savePending,
    saveSuccess,
    saveError,
    removeSuccess,
    removeError,
  } = state;
  return (
    <SectionLayout type="SMALL">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          const { handleSubmit, values } = formik;
          return (
            <form onSubmit={handleSubmit}>
              <FieldArray name={'products'}>
                {({ remove, push }) => (
                  <SectionLayout type="SMALL">
                    {values.products.map((value, index: number) => (
                      <ProductsCompilationBlock
                        key={index}
                        index={index}
                        value={value}
                        formik={formik}
                        remove={remove}
                        onDelete={onDelete}
                      />
                    ))}
                    <FieldLayout type="double" adaptive>
                      <ButtonSecondary
                        tid="COMPILATION.ADD_BLOCK"
                        onClick={() => push(initialBlock)}
                      />
                      <ButtonPrimary tid="COMPILATION.SAVE" type="submit" />
                    </FieldLayout>
                    {(getPending || savePending) && <CenteredSpinner />}

                    {saveSuccess && (
                      <SuccessAlert tid="COMPILATION.COMPILATIONS_SUCCESSFULLY_SAVED" />
                    )}
                    {saveError && <ErrorAlert tid={saveError} />}
                    {removeSuccess && (
                      <SuccessAlert tid="COMPILATION.COMPILATIONS_BLOCK_SUCCESSFULLY_REMOVED" />
                    )}
                    {removeError && <ErrorAlert tid={removeError} />}
                  </SectionLayout>
                )}
              </FieldArray>
            </form>
          );
        }}
      </Formik>
    </SectionLayout>
  );
}
