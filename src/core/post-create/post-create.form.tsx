import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { ButtonPrimary } from 'src/lib/element/button';
import { BasicField, FieldCheckbox } from 'src/lib/element/field';
import { TitlePrimary } from 'src/lib/element/title';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { BlockCategories } from 'src/lib/common/block-categories';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { SelectImageBlock } from 'src/lib/common/block-select-image';
import { Divider } from 'src/lib/element/divider';
import { PostCreateFormProps, POST_FIELD_NAME } from './post-create.type';
import { BlockDeleteProduct } from 'src/lib/common/block-delete-product';
import { ErrorAlert, InfoAlert, SuccessAlert } from 'src/lib/element/alert';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function PostCreateForm(props: PostCreateFormProps) {
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

  function getFieldError(name: POST_FIELD_NAME): any {
    return errors[name] && touched[name] && errors[name];
  }
  function setEditorData(name: POST_FIELD_NAME) {
    return (editorData: any) => setFieldValue(name, editorData);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <SectionLayout type="TEXT">
        {getPending && <CenteredSpinner />}
        <SelectImageBlock
          titleTid="PRODUCT_IMAGES.TITLE"
          name={POST_FIELD_NAME.IMAGES}
          {...formik}
        />

        <Divider />

        <Title tid="Основная информация" />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.ARTICLE_NAME"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.WRITE_ARTICLE_NAME"
            name={POST_FIELD_NAME.NAME}
            value={values[POST_FIELD_NAME.NAME]}
            error={getFieldError(POST_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.DIE"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.EXAMPLE_HIT"
            name={POST_FIELD_NAME.MODIFIER}
            value={values[POST_FIELD_NAME.MODIFIER]}
            error={getFieldError(POST_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Артикул"
            placeholderTid="Введите артикул"
            name={POST_FIELD_NAME.VENDOR_CODE}
            value={values[POST_FIELD_NAME.VENDOR_CODE]}
            error={getFieldError(POST_FIELD_NAME.VENDOR_CODE)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <BlockCategories values={values[POST_FIELD_NAME.CATEGORIES]} type={4} />

        <Divider />

        <BlockReactEditor
          titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.POST"
          handleChange={setEditorData(POST_FIELD_NAME.POST)}
          data={values[POST_FIELD_NAME.POST]}
          enableIsEdit={isEdit}
        />
        <Divider />

        <RecomendationBlock
          value={
            values[POST_FIELD_NAME.RECOMMENDATIONS]?.recommendationProducts
          }
          name={`${POST_FIELD_NAME.RECOMMENDATIONS}.recommendationProducts`}
          setFieldValue={setFieldValue}
        />

        <Divider />

        <FieldLayout type="double" adaptive>
          <FieldCheckbox
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.VISIBILITY"
            labelTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.VISIBILITY"
            name={POST_FIELD_NAME.IS_PUBLIC}
            checked={values[POST_FIELD_NAME.IS_PUBLIC]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldCheckbox
            titleTid="На английском"
            labelTid="Этот товар на английском"
            name={POST_FIELD_NAME.IN_ENGLISH}
            checked={values[POST_FIELD_NAME.IN_ENGLISH]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>

        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid={
              isEdit
                ? 'ARTICLE_CREATE_FORM.BUTTON.SAVE_ARTICLE'
                : 'ARTICLE_CREATE_FORM.BUTTON.CREATE_ARTICLE'
            }
          />
          <BlockDeleteProduct
            isNull={!isEdit}
            deleteFn={onRemove}
            disabled={removePending}
          />
        </FieldLayout>
        {createSuccess && (
          <SuccessAlert tid="ARTICLE_CREATE_FORM.ARTICLE_SUCCESFULLY_CREATED" />
        )}
        {removeSuccess && <SuccessAlert tid="Успешно удалено" />}
        {updateSuccess && <SuccessAlert tid="Успешно обновлено" />}
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
