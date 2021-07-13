import styled from 'styled-components';
import { THEME_SIZE, spacing } from '../../lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import {
  AboutAccountInfoComponent,
  AboutAccountActivityComponent,
} from './frames';
import { ButtonBasic } from '../../lib/element/button';

export function AboutAccountComponent(props) {
  const { activityData } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <AboutAccountInfoComponent />
          <AboutAccountActivityComponent {...activityData} />
        </IndentLayout>
      </Content>
    </Container>
  );
}
const AddSlide = styled.div`
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;

const IconButton = styled(ButtonBasic)`
  padding: ${spacing(2)};
  width: 40px;
  height: 40px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
