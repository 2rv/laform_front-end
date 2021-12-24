import { Formik } from 'formik';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { PatternCreateForm } from './pattern-create.form';
import { PatternCreateComponentProps } from './pattern-create.type';

export function PatternCreateComponent(props: PatternCreateComponentProps) {
  const { initialValues, onSubmit, onRemove, validate, isEdit, state } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="PATTERNS.CREATE.TITLE" />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <PatternCreateForm
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
