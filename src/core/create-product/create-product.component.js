import { SectionLayout } from '../../lib/element/layout';
import {
  CreateProductImageComponent,
  CreateProductFormContainer,
  CreateProductFieldComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CreateProductComponent(props) {
  const { fieldsData, imagesData } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <CreateProductImageComponent items={imagesData} />
      <CreateProductFormContainer fieldsData={fieldsData}>
        {(formProps) => (
          <CreateProductFieldComponent fieldsData={fieldsData} {...formProps} />
        )}
      </CreateProductFormContainer>
    </SectionLayout>
  );
}
