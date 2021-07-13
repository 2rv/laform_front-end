import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import {
  CreateArticleImageComponent,
  CreateArticleFormContainer,
  CreateArticleFieldComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';
export function CreateArticleComponent(props) {
  const { fieldsData } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="Создание мастер-класса" />
          <CreateArticleImageComponent backgroundImage="/static/test/product-image-3.png" />
          <CreateArticleFormContainer fieldsData={fieldsData}>
            {(formProps) => (
              <CreateArticleFieldComponent
                fieldsData={fieldsData}
                {...formProps}
              />
            )}
          </CreateArticleFormContainer>
        </IndentLayout>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
