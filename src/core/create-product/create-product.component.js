import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ContentLayout, IndentLayout } from '../../lib/element/layout';
import {
  CreateProductImageComponent,
  CreateProductFormContainer,
  CreateProductFieldComponent,
} from './frames';
import { TitlePrimary } from '../../lib/element/title';

export function CreateProductComponent(props) {
  const { fieldsData, imagesData } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="Создание мастер-класса" />
          <CreateProductImageComponent items={imagesData} />
          <CreateProductFormContainer fieldsData={fieldsData}>
            {(formProps) => (
              <CreateProductFieldComponent
                fieldsData={fieldsData}
                {...formProps}
              />
            )}
          </CreateProductFormContainer>
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
