import { SectionLayout } from 'src/lib/element/layout';
import { Formik } from 'formik';
import { CompilationArray } from './frames';
import { ProductSelectionsComponentProps } from './product-selections.type';

export function ProductSelectionsComponent(
  props: ProductSelectionsComponentProps,
) {
  const { listItems, initialValues, onSubmit, initialBlock } = props;
  return (
    <SectionLayout type="SMALL">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <CompilationArray
                initialBlock={initialBlock}
                listItems={listItems}
                formik={formik}
              />
            </form>
          );
        }}
      </Formik>
    </SectionLayout>
  );
}
