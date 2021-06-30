import { SEWING_GOODS_FORM_FILTER_FIELD_KEY } from './sewing-goods-form-filter.type';
import { FormFilterContainer } from '../../../../lib/element/form-filter';

export function SewingGoodsFormFilterContainer(props) {
  const {
    categoryOptions,
    tagsOptions,

    fieldName,
    initialValue,
    validation,
    onSubmitForm,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const CATEGORY_NAME = fieldName[SEWING_GOODS_FORM_FILTER_FIELD_KEY.CATEGORY];
  const TAGS_NAME = fieldName[SEWING_GOODS_FORM_FILTER_FIELD_KEY.TAGS];
  const FIND_SEWING_GOODS_NAME =
    fieldName[SEWING_GOODS_FORM_FILTER_FIELD_KEY.FIND_SEWING_GOODS];
  return (
    <FormFilterContainer
      initialValue={initialValue}
      placeholderTid={'SEWING_GOODS.SEWING_GOODS.FIELD.FIND_SEWING_GOODS'}
      categoryOptions={categoryOptions}
      tagsOptions={tagsOptions}
      fieldCategory={CATEGORY_NAME}
      fieldTags={TAGS_NAME}
      fieldFind={FIND_SEWING_GOODS_NAME}
      dataPending={dataPending}
      formPending={formPending}
      formSuccess={formSuccess}
      formError={formError}
      errorMessage={errorMessage}
    />
  );
}
