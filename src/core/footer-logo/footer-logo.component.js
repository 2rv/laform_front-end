import styled from 'styled-components';

import { spacing } from '../../lib/theme';
import { ContentLayout } from '../../lib/element/layout';

import { LogoComponent, LangSelectorComponent } from './frames';

export function FooterLogoComponent(props) {
  const { currentLang, supportedLang } = props;

  return (
    <Container>
      <Content>
        <LogoComponent />
        <LangSelectorComponent
          currentLang={currentLang}
          supportedLang={supportedLang}
        />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing(3)};
`;

const Content = styled(ContentLayout)`
  display: flex;
  justify-content: space-between;
  padding: 0 ${spacing(6)};
`;
