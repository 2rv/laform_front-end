import styled from 'styled-components';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  MultiField,
  FieldCheckbox,
} from '../../../lib/element/field';
import { ARTICLE_FIELD_NAME } from '../article-create.type';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { ReactEditorBlock } from 'src/lib/common/block-react-editor';
import { BlockCategories } from 'src/lib/common/block-categories';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { ModifierBlock } from 'src/lib/common/block-modifier';

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
  const setVisible = () => {
    setFieldValue(
      ARTICLE_FIELD_NAME.DELETED,
      !values[ARTICLE_FIELD_NAME.DELETED],
    );
  };
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
          <ModifierBlock
            colorTitleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.PLATE_COLOR"
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.DIE"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.EXAMPLE_HIT"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            name={ARTICLE_FIELD_NAME.MODIFIER}
            colorName={ARTICLE_FIELD_NAME.COLOR_MODIFIER}
          />
        </FieldLayout>
        <BlockCategories values={values} handleBlur={handleBlur} type={4} />
        <ReactEditorBlock
          titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.POST"
          handleChange={setEditorData(ARTICLE_FIELD_NAME.ARTICLE)}
          data={isEdit && values[ARTICLE_FIELD_NAME.ARTICLE]}
          minHeight={100}
          enableIsEdit={isEdit}
        />
        <RecomendationBlock
          values={values[ARTICLE_FIELD_NAME.RECOMMENDATIONS]}
          name={ARTICLE_FIELD_NAME.RECOMMENDATIONS}
          setFieldValue={setFieldValue}
        />

        <FieldCheckbox
          titleTid="ARTICLE_CREATE_FORM.BUTTON.VISIBLE"
          labelTid="ARTICLE_CREATE_FORM.BUTTON.NOT_VISIBLE"
          name={ARTICLE_FIELD_NAME.DELETED}
          value={values[ARTICLE_FIELD_NAME.DELETED]}
          checked={values[ARTICLE_FIELD_NAME.DELETED]}
          onClick={setVisible}
          onBlur={handleBlur}
        />
        <FieldLayout type="double" adaptive>
          {isEdit ? (
            <ButtonPrimary
              type="submit"
              tid="ARTICLE_CREATE_FORM.BUTTON.SAVE_ARTICLE"
            />
          ) : (
            <ButtonPrimary
              type="submit"
              tid="ARTICLE_CREATE_FORM.BUTTON.CREATE_ARTICLE"
            />
          )}
          <ButtonSecondary
            onClick={() => window.location.reload()}
            tid="ARTICLE_CREATE_FORM.BUTTON.RESET"
          />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}
