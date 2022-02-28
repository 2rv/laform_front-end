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

        <Title tid="MASTER_CLASS.CREATE.SUB_TITLE" />

        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="MASTER_CLASS.CREATE.NAME_TITLE"
            placeholderTid="MASTER_CLASS.CREATE.NAME_PLACEHOLDER"
            name={MASTER_CLASS_FIELD_NAME.NAME}
            value={values[MASTER_CLASS_FIELD_NAME.NAME]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="MASTER_CLASS.CREATE.MODIFIER_TITLE"
            placeholderTid="MASTER_CLASS.CREATE.MODIFIER_PLACEHOLDER"
            name={MASTER_CLASS_FIELD_NAME.MODIFIER}
            value={values[MASTER_CLASS_FIELD_NAME.MODIFIER]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="MASTER_CLASS.CREATE.VENDOR_CODE_TITLE"
            placeholderTid="MASTER_CLASS.CREATE.VENDOR_CODE_PLACEHOLDER"
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
          titleTid="MASTER_CLASS.CREATE.DESCRIPTION_TITLE"
          placeholderTid="MASTER_CLASS.CREATE.DESCRIPTION_PLACEHOLDER"
          name={MASTER_CLASS_FIELD_NAME.DESCRIPTION}
          value={values[MASTER_CLASS_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(MASTER_CLASS_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />

        <Divider />

        <BlockReactEditor
          titleTid="MASTER_CLASS.CREATE.MATERIAL"
          handleChange={setEditorData(MASTER_CLASS_FIELD_NAME.MATERIAL)}
          data={values[MASTER_CLASS_FIELD_NAME.MATERIAL]}
          error={getFieldError(MASTER_CLASS_FIELD_NAME.MATERIAL)}
          enableIsEdit={isEdit}
        />

        <Divider />

        <BlockReactEditor
          titleTid="MASTER_CLASS.CREATE.ARTICLE"
          handleChange={setEditorData(MASTER_CLASS_FIELD_NAME.ARTICLE)}
          data={values[MASTER_CLASS_FIELD_NAME.ARTICLE]}
          minHeight={100}
          enableIsEdit={isEdit}
        />

        <Divider />

        <Title tid="MASTER_CLASS.CREATE.PRICE_TITLE" />

        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="MASTER_CLASS.CREATE.DISCOUNT_TITLE"
            titleTid="MASTER_CLASS.CREATE.DISCOUNT_PLACEHOLDER"
            name={MASTER_CLASS_FIELD_NAME.DISCOUNT}
            value={values[MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            error={getFieldError(MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
          />
          <BasicField
            placeholderTid="MASTER_CLASS.CREATE.PRICE_TITLE"
            titleTid="MASTER_CLASS.CREATE.PRICE_PLACEHOLDER"
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
          value={
            values[MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]
              ?.recommendationProducts
          }
          name={`${MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS}.recommendationProducts`}
          setFieldValue={setFieldValue}
        />

        <Divider />

        <FieldLayout type="double" adaptive>
          <FieldCheckbox
            titleTid="MASTER_CLASS.CREATE.VISIBILITY_TITLE"
            labelTid="MASTER_CLASS.CREATE.VISIBILITY_PLACEHOLDER"
            name={MASTER_CLASS_FIELD_NAME.IS_PUBLIC}
            checked={values[MASTER_CLASS_FIELD_NAME.IS_PUBLIC]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldCheckbox
            titleTid="MASTER_CLASS.CREATE.IN_ENGLISH_TITLE"
            labelTid="MASTER_CLASS.CREATE.IN_ENGLISH_PLACEHOLDER"
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
              isEdit ? 'MASTER_CLASS.CREATE.SAVE' : 'MASTER_CLASS.CREATE.CREATE'
            }
          />
          <BlockDeleteProduct
            isNull={!isEdit}
            deleteFn={onRemove}
            disabled={removePending}
          />
        </FieldLayout>

        {createSuccess && <SuccessAlert tid="MASTER_CLASS.CREATE.CREATED" />}
        {removeSuccess && <SuccessAlert tid="MASTER_CLASS.CREATE.REMOVED" />}
        {updateSuccess && <SuccessAlert tid="MASTER_CLASS.CREATE.UPDATED" />}
        {(createPending || updatePending) && (
          <InfoAlert tid="MASTER_CLASS.CREATE.SAVING" />
        )}
        {removePending && <InfoAlert tid="MASTER_CLASS.CREATE.REMOVING" />}
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
