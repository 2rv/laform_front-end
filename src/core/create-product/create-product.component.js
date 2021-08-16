import { Formik } from 'formik';
import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import {
  CreateProductImageComponent,
  CreateProductFieldComponent,
} from './frames';

export function CreateProductComponent(props) {
  const { imagesData, initialValues, validation, onSubmitForm } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <CreateProductImageComponent items={imagesData} />
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(formProps) => (
          <form onSubmit={formProps.handlesubmit}>
            <CreateProductFieldComponent {...formProps} />
          </form>
        )}
      </Formik>
    </SectionLayout>
  );
}
