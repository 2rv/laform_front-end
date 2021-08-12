import {
  PATTERNS_FILTER_CATEGORY_OPTIONS,
  PATTERNS_FILTER_TAGS_OPTIONS,
} from './patterns.constant';
import {
  PATTERNS_FORM_FILTER_FIELD_NAME,
  PATTERNS_FILTER_FIELD_NAME,
} from './patterns.type';

import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import {
  ContentLayout,
  IndentLayout,
  SectionLayout,
} from '../../lib/element/layout';
import { TextSecondary } from '../../lib/element/text';
import { PatternsSubMenuComponent } from './frames';
import { PatternsFormFilterContainer } from './frames';
import { BasicCardList } from '../../lib/element/card-list';

export function PatternsComponent(props) {
  const { items, menuItems, activePath } = props;
  const patternsFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [PATTERNS_FILTER_FIELD_NAME.CATEGORY]:
          PATTERNS_FILTER_CATEGORY_OPTIONS[0].id,
        [PATTERNS_FILTER_FIELD_NAME.TAGS]: PATTERNS_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <SectionLayout>
      <Title tid="PATTERNS.PATTERNS.TITLE" />
      <PatternsSubMenuComponent items={menuItems} activePath={activePath} />
      <PatternsFormFilterContainer
        categoryOptions={PATTERNS_FILTER_CATEGORY_OPTIONS}
        tagsOptions={PATTERNS_FILTER_TAGS_OPTIONS}
        initialValue={patternsFormFilterGetInitialValue()}
        fieldName={PATTERNS_FORM_FILTER_FIELD_NAME}
      />
      <BasicCardList type="pattern" items={items} />
    </SectionLayout>
  );
}
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.SECONDARY_DARK};
`;
