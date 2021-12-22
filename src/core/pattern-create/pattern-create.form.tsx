import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { ButtonPrimary } from 'src/lib/element/button';
import {
  BasicField,
  FieldCheckbox,
  TextareaField,
  ComplexityField,
} from 'src/lib/element/field';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { BlockCategories } from 'src/lib/common/block-categories';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { TitlePrimary } from 'src/lib/element/title';
import {
  PatternCreateFormProps,
  PATTERN_CREATE_FIELD_NAME,
} from './pattern-create.type';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { BlockDeleteProduct } from 'src/lib/common/block-delete-product';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { numberValue } from 'src/lib/common/create-product-validation';
import { BlockSelectFiles } from 'src/lib/common/block-select-files';
import { Fragment } from 'react';
import { PatternCreateOptions } from './pattern-create.options';
import { CreatePriceBlock } from 'src/lib/common/block-create-price';
import { checkMinPriceAndDiscount } from 'src/lib/common/product-converters/convert.utils';

export function PatternCreateForm(props: PatternCreateFormProps) {
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

  function getFieldError(name: PATTERN_CREATE_FIELD_NAME): any {
    return errors[name] && touched[name] && errors[name];
  }
  function setEditorData(name: PATTERN_CREATE_FIELD_NAME) {
    return (editorData: any) => setFieldValue(name, editorData);
  }
  function setNumber(name: PATTERN_CREATE_FIELD_NAME.COMPLEXITY) {
    return (e: any) => setFieldValue(name, numberValue(e));
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <SectionLayout>
        {getPending && <CenteredSpinner />}

        <SelectImageBlock
          titleTid="PRODUCT_IMAGES.TITLE"
          name={PATTERN_CREATE_FIELD_NAME.IMAGES}
          {...formik}
        />

        <Divider />

        <Title tid="Основная информация" />

        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.NAME"
            placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={PATTERN_CREATE_FIELD_NAME.NAME}
            value={values[PATTERN_CREATE_FIELD_NAME.NAME]}
            error={getFieldError(PATTERN_CREATE_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
            placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.DICE_OF_GOODS"
            name={PATTERN_CREATE_FIELD_NAME.MODIFIER}
            value={values[PATTERN_CREATE_FIELD_NAME.MODIFIER]}
            error={getFieldError(PATTERN_CREATE_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Артикул"
            placeholderTid="Введите артикул"
            name={PATTERN_CREATE_FIELD_NAME.VENDOR_CODE}
            value={values[PATTERN_CREATE_FIELD_NAME.VENDOR_CODE]}
            error={getFieldError(PATTERN_CREATE_FIELD_NAME.VENDOR_CODE)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <BlockCategories
          values={values[PATTERN_CREATE_FIELD_NAME.CATEGORIES]}
          type={2}
        />

        <TextareaField
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
          placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
          name={PATTERN_CREATE_FIELD_NAME.DESCRIPTION}
          value={values[PATTERN_CREATE_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(PATTERN_CREATE_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
        {values[PATTERN_CREATE_FIELD_NAME.DESCRIPTION_OLD] && (
          <TextArea
            titleTid="Описание старый тип"
            name={PATTERN_CREATE_FIELD_NAME.DESCRIPTION_OLD}
            value={values[PATTERN_CREATE_FIELD_NAME.DESCRIPTION_OLD]}
            error={getFieldError(PATTERN_CREATE_FIELD_NAME.DESCRIPTION_OLD)}
            onChange={handleChange}
            onBlur={handleBlur}
            minHeight={100}
          />
        )}

        <Divider />

        <BlockReactEditor
          titleTid="PATTERNS.CREATE.FORM.MATERIALS"
          handleChange={setEditorData(PATTERN_CREATE_FIELD_NAME.MATERIAL)}
          data={values[PATTERN_CREATE_FIELD_NAME.MATERIAL]}
          error={getFieldError(PATTERN_CREATE_FIELD_NAME.MATERIAL)}
          enableIsEdit={isEdit}
        />
        {values[PATTERN_CREATE_FIELD_NAME.MATERIAL_OLD] && (
          <TextArea
            titleTid="Материалы старый тип"
            name={PATTERN_CREATE_FIELD_NAME.MATERIAL_OLD}
            value={values[PATTERN_CREATE_FIELD_NAME.MATERIAL_OLD]}
            error={getFieldError(PATTERN_CREATE_FIELD_NAME.MATERIAL_OLD)}
            onChange={handleChange}
            onBlur={handleBlur}
            minHeight={100}
          />
        )}

        <Divider />

        <Title tid="Параметры товара" />
        <FieldLayout type="double" adaptive>
          <ComplexityField
            title="PATTERNS.CREATE.FORM.COMPLEXITY"
            value={values[PATTERN_CREATE_FIELD_NAME.COMPLEXITY]}
            onChange={setNumber(PATTERN_CREATE_FIELD_NAME.COMPLEXITY)}
          />
          <FieldCheckbox
            titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.TYPE"
            labelTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.TYPE"
            checked={values[PATTERN_CREATE_FIELD_NAME.TYPE]}
            name={PATTERN_CREATE_FIELD_NAME.TYPE}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldCheckbox
            titleTid="Наличие размеров"
            labelTid="Есть размеры"
            checked={values[PATTERN_CREATE_FIELD_NAME.OPTION_TYPE]}
            name={PATTERN_CREATE_FIELD_NAME.OPTION_TYPE}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {values[PATTERN_CREATE_FIELD_NAME.TYPE] && (
            <FieldCheckbox
              titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.PRODUCT_QUANTITY"
              labelTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.PRODUCT_QUANTITY"
              name={PATTERN_CREATE_FIELD_NAME.IS_COUNT}
              checked={values[PATTERN_CREATE_FIELD_NAME.IS_COUNT]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </FieldLayout>

        <Divider />

        {values[PATTERN_CREATE_FIELD_NAME.OPTION_TYPE] ? (
          <PatternCreateOptions formik={formik} />
        ) : (
          <Fragment>
            <FieldLayout type="double" adaptive>
              <BasicField
                titleTid="Цена"
                type="number"
                placeholderTid="Введите цену (руб.)"
                name={PATTERN_CREATE_FIELD_NAME.PRICE}
                value={values[PATTERN_CREATE_FIELD_NAME.PRICE]}
                error={getFieldError(PATTERN_CREATE_FIELD_NAME.PRICE)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <BasicField
                titleTid="Введите скидку (%)"
                placeholderTid="0"
                type="number"
                name={PATTERN_CREATE_FIELD_NAME.DISCOUNT}
                value={values[PATTERN_CREATE_FIELD_NAME.DISCOUNT]}
                error={getFieldError(PATTERN_CREATE_FIELD_NAME.DISCOUNT)}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FieldLayout>
            {values[PATTERN_CREATE_FIELD_NAME.IS_COUNT] && (
              <FieldLayout type="double" adaptive>
                <BasicField
                  titleTid="Введите количество (Шт.)"
                  placeholderTid="0"
                  type="number"
                  name={PATTERN_CREATE_FIELD_NAME.COUNT}
                  value={values[PATTERN_CREATE_FIELD_NAME.COUNT]}
                  error={getFieldError(PATTERN_CREATE_FIELD_NAME.COUNT)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FieldLayout>
            )}
            <BlockSelectFiles
              files={values[PATTERN_CREATE_FIELD_NAME.FILES]}
              name={PATTERN_CREATE_FIELD_NAME.FILES}
              setFieldValue={setFieldValue}
            />
          </Fragment>
        )}

        <Divider />

        <RecomendationBlock
          values={values[PATTERN_CREATE_FIELD_NAME.RECOMMENDATIONS]}
          name={PATTERN_CREATE_FIELD_NAME.RECOMMENDATIONS}
          setFieldValue={setFieldValue}
        />

        <Divider />

        <CreatePriceBlock
          priceAndDiscount={checkMinPriceAndDiscount(
            values[PATTERN_CREATE_FIELD_NAME.OPTIONS],
            values[PATTERN_CREATE_FIELD_NAME.PRICE],
            values[PATTERN_CREATE_FIELD_NAME.DISCOUNT],
          )}
        />

        <FieldLayout type="double" adaptive>
          <FieldCheckbox
            titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.VISIBILITY"
            labelTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.VISIBILITY"
            name={PATTERN_CREATE_FIELD_NAME.IS_PUBLIC}
            checked={values[PATTERN_CREATE_FIELD_NAME.IS_PUBLIC]}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FieldCheckbox
            titleTid="На английском"
            labelTid="Этот товар на английском"
            name={PATTERN_CREATE_FIELD_NAME.IN_ENGLISH}
            checked={values[PATTERN_CREATE_FIELD_NAME.IN_ENGLISH]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid={
              isEdit
                ? 'PATTERNS.CREATE.FORM.BUTTON.SAVE'
                : 'PATTERNS.CREATE.FORM.BUTTON.CREATE_PRODUCT'
            }
          />
          <BlockDeleteProduct
            isNull={!isEdit}
            deleteFn={onRemove}
            disabled={removePending}
          />
        </FieldLayout>

        {createSuccess && (
          <SuccessAlert tid="PATTERNS.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {removeSuccess && <SuccessAlert tid="Успешно удалено" />}
        {updateSuccess && (
          <SuccessAlert tid="PATTERNS.CREATE.PRODUCT_SUCCESSFULLY_UPDATED" />
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
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
const TextArea = styled(TextareaField)`
  resize: vertical;
`;
