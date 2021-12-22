import { Formik } from 'formik';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { PostCreateComponentProps } from './post-create.type';
import { PostCreateForm } from './post-create.form';

export function PostCreateComponent(props: PostCreateComponentProps) {
  const { initialValues, onSubmit, onRemove, validate, isEdit, state } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="ARTICLE_CREATE_FORM.CREATING_AN_ARTICLE" />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {(formik) => (
          <PostCreateForm
            formik={formik}
            isEdit={isEdit}
            state={state}
            onRemove={onRemove}
          />
        )}
      </Formik>
    </SectionLayout>
  );
}
