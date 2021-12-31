import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary } from 'src/lib/element/button';
import {
  BasicField,
  TextareaField,
  FieldCheckbox,
  FieldSelect,
} from 'src/lib/element/field';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { Divider } from 'src/lib/element/divider';
import { BlockCategories } from 'src/lib/common/block-categories';
import { checkMinPriceAndDiscount } from 'src/lib/common/product-converters/convert.utils';
import { CreatePriceBlock } from 'src/lib/common/block-create-price';
import {
  SewingGoodsCreateFormProps,
  SEWING_GOODS_CREATE_FIELD_NAME,
} from './sewing-goods-create.type';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { BlockDeleteProduct } from 'src/lib/common/block-delete-product';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { SewingGoodsCreateOptions } from './sewing-goods-create.options';
import { ChangeEvent } from 'react';

export function SewingGoodsCreateForm(props: SewingGoodsCreateFormProps) {
  const {
    formik,
    formik: {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      setFieldValue,
      handleSubmit,
      handleReset,
    },
    isEdit,
    state: {
      createPending,
      createSuccess,
      createError,
      getPending,
      getError,
      removePending,
      removeSuccess,
      removeError,
      updatePending,
      updateSuccess,
      updateError,
    },
    onRemove,
  } = props;

  function getFieldError(name: SEWING_GOODS_CREATE_FIELD_NAME): any {
    return errors[name] && touched[name] && errors[name];
  }
  const isCount = values[SEWING_GOODS_CREATE_FIELD_NAME.IS_COUNT];
  const isLength = values[SEWING_GOODS_CREATE_FIELD_NAME.IS_LENGTH];
  const isNoneOptions =
    values[SEWING_GOODS_CREATE_FIELD_NAME.OPTION_TYPE] === 0;

  function setType(e: ChangeEvent<HTMLSelectElement>) {
    const name = e.target.name;
    const value = +e.target.value;
    setFieldValue(name, value);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <SectionLayout>
        {getPending && <CenteredSpinner />}

        <SelectImageBlock
          titleTid="PRODUCT_IMAGES.TITLE"
          name={SEWING_GOODS_CREATE_FIELD_NAME.IMAGES}
          {...formik}
        />

        <Divider />

        <Title tid="Основная информация" />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.NAME"
            placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={SEWING_GOODS_CREATE_FIELD_NAME.NAME}
            value={values[SEWING_GOODS_CREATE_FIELD_NAME.NAME]}
            error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
            placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.DICE_OF_GOODS"
            name={SEWING_GOODS_CREATE_FIELD_NAME.MODIFIER}
            value={values[SEWING_GOODS_CREATE_FIELD_NAME.MODIFIER]}
            error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Артикул"
            placeholderTid="Введите артикул"
            name={SEWING_GOODS_CREATE_FIELD_NAME.VENDOR_CODE}
            value={values[SEWING_GOODS_CREATE_FIELD_NAME.VENDOR_CODE]}
            error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.VENDOR_CODE)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <BlockCategories
          values={values[SEWING_GOODS_CREATE_FIELD_NAME.CATEGORIES]}
          type={3}
        />

        <TextareaField
          titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
          placeholderTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
          name={SEWING_GOODS_CREATE_FIELD_NAME.DESCRIPTION}
          value={values[SEWING_GOODS_CREATE_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />

        <Divider />

        <Title tid="Параметры товара" />

        <FieldLayout type="double" adaptive>
          <FieldSelect
            titleTid="Выберите тип параметров"
            name={SEWING_GOODS_CREATE_FIELD_NAME.OPTION_TYPE}
            value={values[SEWING_GOODS_CREATE_FIELD_NAME.OPTION_TYPE]}
            options={optionSelectType}
            onChange={setType}
            onBlur={handleBlur}
          />
          <FieldCheckbox
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.QUANTITY"
            labelTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.QUANTITY"
            name={SEWING_GOODS_CREATE_FIELD_NAME.IS_COUNT}
            checked={values[SEWING_GOODS_CREATE_FIELD_NAME.IS_COUNT]}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isLength}
            error={isLength ? 'Нельзя использовать с длинной' : undefined}
          />
          <FieldCheckbox
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.LENGTH"
            labelTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.LENGTH"
            name={SEWING_GOODS_CREATE_FIELD_NAME.IS_LENGTH}
            checked={values[SEWING_GOODS_CREATE_FIELD_NAME.IS_LENGTH]}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isCount}
            error={isCount ? 'Нельзя использовать с количеством' : undefined}
          />
        </FieldLayout>

        <Divider />

        {isNoneOptions ? (
          <SectionLayout type="SMALL">
            <FieldLayout type="double" adaptive>
              <BasicField
                titleTid="Цена"
                type="number"
                placeholderTid="Введите цену (руб.)"
                name={SEWING_GOODS_CREATE_FIELD_NAME.PRICE}
                value={values[SEWING_GOODS_CREATE_FIELD_NAME.PRICE]}
                error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.PRICE)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <BasicField
                titleTid="Введите скидку (%)"
                placeholderTid="0"
                type="number"
                name={SEWING_GOODS_CREATE_FIELD_NAME.DISCOUNT}
                value={values[SEWING_GOODS_CREATE_FIELD_NAME.DISCOUNT]}
                error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.DISCOUNT)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldLayout>
            {(isCount || isLength) && (
              <FieldLayout type="double" adaptive>
                {isCount && (
                  <BasicField
                    titleTid="Введите количество (Шт.)"
                    placeholderTid="0"
                    type="number"
                    name={SEWING_GOODS_CREATE_FIELD_NAME.COUNT}
                    value={values[SEWING_GOODS_CREATE_FIELD_NAME.COUNT]}
                    error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.COUNT)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
                {isLength && (
                  <BasicField
                    titleTid="Введите длинну (Метр) 0,00"
                    placeholderTid="0"
                    name={SEWING_GOODS_CREATE_FIELD_NAME.LENGTH}
                    value={values[SEWING_GOODS_CREATE_FIELD_NAME.LENGTH]}
                    type="number"
                    error={getFieldError(SEWING_GOODS_CREATE_FIELD_NAME.LENGTH)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              </FieldLayout>
            )}
          </SectionLayout>
        ) : (
          <SewingGoodsCreateOptions formik={formik} />
        )}
        <Divider />

        <RecomendationBlock
          value={
            values[SEWING_GOODS_CREATE_FIELD_NAME.RECOMMENDATIONS]
              ?.recommendationProducts
          }
          name={`${SEWING_GOODS_CREATE_FIELD_NAME.RECOMMENDATIONS}.recommendationProducts`}
          setFieldValue={setFieldValue}
        />

        <Divider />

        <CreatePriceBlock
          priceAndDiscount={checkMinPriceAndDiscount(
            values[SEWING_GOODS_CREATE_FIELD_NAME.OPTIONS],
            values[SEWING_GOODS_CREATE_FIELD_NAME.PRICE],
            values[SEWING_GOODS_CREATE_FIELD_NAME.DISCOUNT],
          )}
        />

        <Divider />

        <FieldLayout type="double" adaptive>
          <FieldCheckbox
            titleTid="SEWING_GOODS.CREATE.FORM.FIELDS.TITLE.VISIBILITY"
            labelTid="SEWING_GOODS.CREATE.FORM.FIELDS.PLACEHOLDER.VISIBILITY"
            name={SEWING_GOODS_CREATE_FIELD_NAME.IS_PUBLIC}
            checked={values[SEWING_GOODS_CREATE_FIELD_NAME.IS_PUBLIC]}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FieldCheckbox
            titleTid="На английском"
            labelTid="Этот товар на английском"
            name={SEWING_GOODS_CREATE_FIELD_NAME.IN_ENGLISH}
            checked={values[SEWING_GOODS_CREATE_FIELD_NAME.IN_ENGLISH]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid={
              isEdit
                ? 'SEWING_GOODS.CREATE.FORM.BUTTON.SAVE'
                : 'SEWING_GOODS.CREATE.FORM.BUTTON.CREATE_PRODUCT'
            }
          />
          <BlockDeleteProduct
            isNull={!isEdit}
            deleteFn={onRemove}
            disabled={removePending}
          />
        </FieldLayout>
        {createSuccess && (
          <SuccessAlert tid="SEWING_GOODS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {removeSuccess && <SuccessAlert tid="Успешно удалено" />}
        {updateSuccess && (
          <SuccessAlert tid="SEWING_GOODS.CREATE.PRODUCT_SUCCESSFULLY_UPDATED" />
        )}
        {(createPending || updatePending) && (
          <InfoAlert tid="Идёт сохранение, подождите" />
        )}
        {removePending && <InfoAlert tid="Идёт удаление, подождите" />}
        {(createError || getError || removeError || updateError) && (
          <ErrorAlert
            tid={createError || getError || removeError || updateError || ''}
          />
        )}
      </SectionLayout>
    </form>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const optionSelectType = [
  { id: 0, tid: 'Без параметров' },
  { id: 1, tid: 'Размер и цвет' },
  { id: 2, tid: 'Только размер' },
  { id: 3, tid: 'Только цвет' },
];
