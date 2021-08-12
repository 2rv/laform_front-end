import { SectionLayout } from '../../lib/element/layout';
import {
  CreateArticleImageComponent,
  CreateArticleFormContainer,
  CreateArticleFieldComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CreateArticleComponent(props) {
  const { fieldsData } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Создание мастер-класса" />
      <CreateArticleImageComponent backgroundImage="/static/test/product-image-3.png" />
      <CreateArticleFormContainer fieldsData={fieldsData}>
        {(formProps) => (
          <CreateArticleFieldComponent fieldsData={fieldsData} {...formProps} />
        )}
      </CreateArticleFormContainer>
    </SectionLayout>
  );
}
