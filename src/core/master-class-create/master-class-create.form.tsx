import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary } from 'src/lib/element/button';
import {
  BasicField,
  TextareaField,
  FieldCheckbox,
} from 'src/lib/element/field';
import { BlockCategories } from 'src/lib/common/block-categories';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { CreatePriceBlock } from 'src/lib/common/block-create-price';
import { Divider } from 'src/lib/element/divider';
import {
  MasterClassCreateFormProps,
  MASTER_CLASS_FIELD_NAME,
} from './master-class-create.type';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { BlockDeleteProduct } from 'src/lib/common/block-delete-product';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';

export function MasterClassCreateForm(props: MasterClassCreateFormProps) {
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

  function getFieldError(name: MASTER_CLASS_FIELD_NAME): any {
    return errors[name] && touched[name] && errors[name];
  }
  function setEditorData(name: MASTER_CLASS_FIELD_NAME) {
    return (editorData: any) => setFieldValue(name, editorData);
  }

  //----------------------------

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <SectionLayout type="TEXT">
        {getPending && <CenteredSpinner />}

        <SelectImageBlock
          titleTid="PRODUCT_IMAGES.TITLE"
          name={MASTER_CLASS_FIELD_NAME.IMAGES}
          {...formik}
        />

        <Divider />

        <Title tid="Основная информация" />

        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.NAME"
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={MASTER_CLASS_FIELD_NAME.NAME}
            value={values[MASTER_CLASS_FIELD_NAME.NAME]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={MASTER_CLASS_FIELD_NAME.MODIFIER}
            value={values[MASTER_CLASS_FIELD_NAME.MODIFIER]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Артикул"
            placeholderTid="Введите артикул"
            name={MASTER_CLASS_FIELD_NAME.VENDOR_CODE}
            value={values[MASTER_CLASS_FIELD_NAME.VENDOR_CODE]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.VENDOR_CODE)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <BlockCategories
          values={values[MASTER_CLASS_FIELD_NAME.CATEGORIES]}
          type={0}
        />

        <TextareaField
          titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
          placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
          name={MASTER_CLASS_FIELD_NAME.DESCRIPTION}
          value={values[MASTER_CLASS_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(MASTER_CLASS_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />

        <Divider />

        <BlockReactEditor
          titleTid="PATTERNS.CREATE.FORM.MATERIALS"
          handleChange={setEditorData(MASTER_CLASS_FIELD_NAME.MATERIAL)}
          data={values[MASTER_CLASS_FIELD_NAME.MATERIAL]}
          error={getFieldError(MASTER_CLASS_FIELD_NAME.MATERIAL)}
          enableIsEdit={isEdit}
        />

        <Divider />

        <BlockReactEditor
          titleTid="MASTER_CLASSES.CREATE.FORM.MASTER_CLASS_ARTICLE"
          handleChange={setEditorData(MASTER_CLASS_FIELD_NAME.ARTICLE)}
          data={values[MASTER_CLASS_FIELD_NAME.ARTICLE]}
          minHeight={100}
          enableIsEdit={isEdit}
        />

        <Divider />

        <Title tid="MASTER_CLASSES.CREATE.FORM.PRICE" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DISCOUNT"
            name={MASTER_CLASS_FIELD_NAME.DISCOUNT}
            value={values[MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
          />
          <BasicField
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.INDICATE_PRICE"
            titleTid="MASTER_CLASSES.CREATE.FORM.PRICE"
            name={MASTER_CLASS_FIELD_NAME.PRICE}
            value={values[MASTER_CLASS_FIELD_NAME.PRICE]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.PRICE)}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
          />
          <CreatePriceBlock
            priceAndDiscount={{
              discount: values[MASTER_CLASS_FIELD_NAME.DISCOUNT],
              price: values[MASTER_CLASS_FIELD_NAME.PRICE],
            }}
          />
        </FieldLayout>

        <Divider />

        <RecomendationBlock
          values={values[MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]}
          name={MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS}
          setFieldValue={setFieldValue}
        />

        <Divider />

        <FieldLayout type="double" adaptive>
          <FieldCheckbox
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.VISIBILITY"
            labelTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.VISIBILITY"
            name={MASTER_CLASS_FIELD_NAME.IS_PUBLIC}
            checked={values[MASTER_CLASS_FIELD_NAME.IS_PUBLIC]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldCheckbox
            titleTid="На английском"
            labelTid="Этот товар на английском"
            name={MASTER_CLASS_FIELD_NAME.IN_ENGLISH}
            checked={values[MASTER_CLASS_FIELD_NAME.IN_ENGLISH]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid={
              isEdit
                ? 'MASTER_CLASSES.CREATE.FORM.BUTTON.SAVE'
                : 'MASTER_CLASSES.CREATE.FORM.BUTTON.CREATE_PRODUCT'
            }
          />
          <BlockDeleteProduct
            isNull={!isEdit}
            deleteFn={onRemove}
            disabled={removePending}
          />
        </FieldLayout>

        {createSuccess && (
          <SuccessAlert tid="MASTER_CLASSES.CREATE.PRODUCT_SUCCESSFULLY_CREATED" />
        )}
        {removeSuccess && <SuccessAlert tid="Успешно удалено" />}
        {updateSuccess && (
          <SuccessAlert tid="MASTER_CLASSES.CREATE.PRODUCT_SUCCESSFULLY_UPDATED" />
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
