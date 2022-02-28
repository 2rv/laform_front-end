import { Formik } from 'formik';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { MasterClassCreateForm } from './master-class-create.form';
import { MasterClassCreateComponentProps } from './master-class-create.type';

export function MasterClassCreateComponent(
  props: MasterClassCreateComponentProps,
) {
  const { initialValues, onSubmit, onRemove, validate, isEdit, state } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="MASTER_CLASS.CREATE.TITLE" />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <MasterClassCreateForm
              isEdit={isEdit}
              state={state}
              formik={formik}
              onRemove={onRemove}
            />
          );
        }}
      </Formik>
    </SectionLayout>
  );
}
