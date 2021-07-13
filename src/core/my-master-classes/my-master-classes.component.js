import styled from 'styled-components';

import { MyMasterClassesListComponent } from './frame';

import { MY_MASTER_CLASSES_LIST } from './my-master-classes.constant';

import { ContentLayout } from 'src/lib/element/layout';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function MyMasterClassesComponent() {
  return (
    <Container>
      <Content>
        <Headline tid="MASTER_CLASSES.MY_MASTER_CLASSES.TITLE" />
        <MyMasterClassesListComponent myMasterClassesList={MY_MASTER_CLASSES_LIST} />
      </Content>
    </Container>
  );
}

const Headline = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(2)};
`;
