import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { SectionLayout } from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { BasicCardList } from '../../lib/element/card-list';
import { MasterClassesFormFilterContainer } from './frames';
import {
  MASTER_CLASSES_FILTER_CATEGORY_OPTIONS,
  MASTER_CLASSES_FILTER_TAGS_OPTIONS,
} from './master-classes.constant';
import {
  MASTER_CLASSES_FORM_FILTER_FIELD_NAME,
  MASTER_CLASSES_FILTER_FIELD_NAME,
} from './master-classes.type';

export function MasterClassesComponent(props) {
  const { items } = props;
  const masterClassesFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [MASTER_CLASSES_FILTER_FIELD_NAME.CATEGORY]:
          MASTER_CLASSES_FILTER_CATEGORY_OPTIONS[0].id,
        [MASTER_CLASSES_FILTER_FIELD_NAME.TAGS]:
          MASTER_CLASSES_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <SectionLayout>
      <Title tid="MASTER_CLASSES.MASTER_CLASSES.TITLE" />
      <MasterClassesFormFilterContainer
        categoryOptions={MASTER_CLASSES_FILTER_CATEGORY_OPTIONS}
        tagsOptions={MASTER_CLASSES_FILTER_TAGS_OPTIONS}
        initialValue={masterClassesFormFilterGetInitialValue()}
        fieldName={MASTER_CLASSES_FORM_FILTER_FIELD_NAME}
      />
      <BasicCardList items={items} actions={['OTHER.PURCHASED', 'OTHER.BUY']} />
    </SectionLayout>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
