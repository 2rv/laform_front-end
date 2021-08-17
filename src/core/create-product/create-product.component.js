import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import {
  CreateProductImageComponent,
  CreateProductFormContainer,
} from './frames';

export function CreateProductComponent(props) {
  const {
    imagesData,
    initialCategoriesItem,
    initialPositionsItem,
    initialOptionsItem,
    initialValues,
    onSubmitForm,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <CreateProductImageComponent items={imagesData} />
      <CreateProductFormContainer
        initialCategoriesItem={initialCategoriesItem}
        initialPositionsItem={initialPositionsItem}
        initialOptionsItem={initialOptionsItem}
        initialValues={initialValues}
        onSubmitForm={onSubmitForm}
      />
    </SectionLayout>
  );
}
