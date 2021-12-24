import { Formik } from 'formik';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { SewingGoodsCreateForm } from './sewing-goods-create.form';
import { SewingGoodsCreateComponentProps } from './sewing-goods-create.type';

export function SewingGoodsCreateComponent(
  props: SewingGoodsCreateComponentProps,
) {
  const { initialValues, onSubmit, validate, onRemove, isEdit, state } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="SEWING_GOODS.CREATE.TITLE" />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => (
          <SewingGoodsCreateForm
            isEdit={isEdit}
            state={state}
            formik={formik}
            onRemove={onRemove}
          />
        )}
      </Formik>
    </SectionLayout>
  );
}
