import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import {
  CreateProductImageComponent,
  CreateProductFormContainer,
} from './frames';

export function CreateProductComponent(props) {
  const {
    initialCategoriesItem,
    initialPositionsItem,
    initialOptionsItem,
    initialValues,
    onSubmitForm,
    validation,
    pickImage,
    imagesData,
    deleteImage,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <CreateProductImageComponent
        pickImage={pickImage}
        imagesData={imagesData}
        deleteImage={deleteImage}
      />
      <CreateProductFormContainer
        initialCategoriesItem={initialCategoriesItem}
        initialPositionsItem={initialPositionsItem}
        initialOptionsItem={initialOptionsItem}
        initialValues={initialValues}
        onSubmitForm={onSubmitForm}
        validation={validation}
      />
    </SectionLayout>
  );
}
