import { MasterClassesComponent } from './master-classes.component';
import {
  MASTER_CLASSES_TEST_ITEMS,
  MASTER_CLASSES_FILTER_CATEGORY_OPTIONS,
  MASTER_CLASSES_FILTER_TAGS_OPTIONS,
} from './master-classes.constant';
import {
  MASTER_CLASSES_FORM_FILTER_FIELD_NAME,
  MASTER_CLASSES_FILTER_FIELD_NAME,
} from './master-classes.type';

export function MasterClassesContainer() {
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
    <MasterClassesComponent
      categoryOptions={MASTER_CLASSES_FILTER_CATEGORY_OPTIONS}
      tagsOptions={MASTER_CLASSES_FILTER_TAGS_OPTIONS}
      initialValue={masterClassesFormFilterGetInitialValue()}
      fieldName={MASTER_CLASSES_FORM_FILTER_FIELD_NAME}
      masterClassesData={MASTER_CLASSES_TEST_ITEMS}
    />
  );
}
