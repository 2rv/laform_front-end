import { SewingGoodsComponent } from './sewing-goods.component';
import {
  SEWING_GOODS_TEST_ITEMS,
  SEWING_GOODS_FILTER_CATEGORY_OPTIONS,
  SEWING_GOODS_FILTER_TAGS_OPTIONS,
} from './sewing-goods.constant';
import {
  SEWING_GOODS_FORM_FILTER_FIELD_NAME,
  SEWING_GOODS_FILTER_FIELD_NAME,
} from './sewing-goods.type';

export function SewingGoodsContainer() {
  const sewingGoodsFormFilterGetInitialValue = () => {
    const rawData = false; //getRequestData(changeDeliveryInfo, null);
    if (!rawData) {
      return {
        [SEWING_GOODS_FILTER_FIELD_NAME.CATEGORY]:
          SEWING_GOODS_FILTER_CATEGORY_OPTIONS[0].id,
        [SEWING_GOODS_FILTER_FIELD_NAME.TAGS]:
          SEWING_GOODS_FILTER_TAGS_OPTIONS[0].id,
      };
    }
  };
  return (
    <SewingGoodsComponent
      categoryOptions={SEWING_GOODS_FILTER_CATEGORY_OPTIONS}
      tagsOptions={SEWING_GOODS_FILTER_TAGS_OPTIONS}
      initialValue={sewingGoodsFormFilterGetInitialValue()}
      fieldName={SEWING_GOODS_FORM_FILTER_FIELD_NAME}
      dataSewingGoods={SEWING_GOODS_TEST_ITEMS}
    />
  );
}
