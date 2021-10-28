import styled from 'styled-components';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import { BasicField, MultiField } from '../../../lib/element/field';
import { ARTICLE_FIELD_NAME } from '../article-create.type';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { ReactEditor } from 'src/core/block-react-editor';
import { BlockCategories } from 'src/core/block-categories';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    isEdit,
  } = props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.ARTICLE_NAME"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.WRITE_ARTICLE_NAME"
            name={ARTICLE_FIELD_NAME.NAME}
            value={values[ARTICLE_FIELD_NAME.NAME]}
            error={getFieldError(ARTICLE_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.DIE"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.EXAMPLE_HIT"
            name={ARTICLE_FIELD_NAME.MODIFIER}
            value={values[ARTICLE_FIELD_NAME.MODIFIER]}
            error={getFieldError(ARTICLE_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <BlockCategories values={values} handleBlur={handleBlur} type={4} />
        <SectionLayout type="SMALL">
          <Title tid="Статья" />
          <ReactEditor
            handleChange={setEditorData(ARTICLE_FIELD_NAME.ARTICLE)}
            data={isEdit && values[ARTICLE_FIELD_NAME.ARTICLE]}
            name={ARTICLE_FIELD_NAME.ARTICLE}
            minHeight={100}
            enableIsEdit={isEdit}
          />
        </SectionLayout>
        <RecomendationBlock
          values={values[ARTICLE_FIELD_NAME.RECOMMENDATIONS]}
          name={ARTICLE_FIELD_NAME.RECOMMENDATIONS}
          setFieldValue={setFieldValue}
        />
        <FieldLayout type="double" adaptive>
          {isEdit ? (
            <ButtonPrimary type="submit" tid="Сохранить" />
          ) : (
            <ButtonPrimary
              type="submit"
              tid="ARTICLE_CREATE_FORM.BUTTON.CREATE_ARTICLE"
            />
          )}
          <ButtonSecondary tid="ARTICLE_CREATE_FORM.BUTTON.CANCEL" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
