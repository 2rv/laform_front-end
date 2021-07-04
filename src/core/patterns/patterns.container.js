import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { PatternsComponent } from './patterns.component';
import {
  PATTERNS_FORM_FILTER_FIELD_NAME,
  PATTERNS_FILTER_FIELD_NAME,
} from './patterns.type';
import {
  PATTERNS_SUB_MENU_TEST_ITEMS,
  PATTERNS_TEST_ITEMS,
  PATTERNS_FILTER_CATEGORY_OPTIONS,
  PATTERNS_FILTER_TAGS_OPTIONS,
} from './patterns.constant';

export function PatternsContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));
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
    <PatternsComponent
      categoryOptions={PATTERNS_FILTER_CATEGORY_OPTIONS}
      tagsOptions={PATTERNS_FILTER_TAGS_OPTIONS}
      fieldName={PATTERNS_FORM_FILTER_FIELD_NAME}
      dataPatternItems={PATTERNS_TEST_ITEMS}
      menuItems={PATTERNS_SUB_MENU_TEST_ITEMS}
      initialValue={patternsFormFilterGetInitialValue()}
      activePath={activePath}
    />
  );
}
