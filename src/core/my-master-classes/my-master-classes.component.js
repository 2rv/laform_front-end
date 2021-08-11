import styled from 'styled-components';
import { MyMasterClassesListComponent } from './frame';
import { MY_MASTER_CLASSES_LIST } from './my-master-classes.constant';
import { TextSecondary } from '../../lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';

export function MyMasterClassesComponent() {
  return (
    <SectionLayout>
      <Title tid="MASTER_CLASSES.MY_MASTER_CLASSES.TITLE" />
      <MyMasterClassesListComponent
        myMasterClassesList={MY_MASTER_CLASSES_LIST}
      />
    </SectionLayout>
  );
}

const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
