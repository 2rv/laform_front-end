import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import { BasicField, MultiField } from '../../../lib/element/field';
import { ARTICLE_FIELD_NAME } from '../article-create.type';
import { RecomendationBlock } from '../../block-recomendation';
import { BlockEditor } from '../../block-editor';
import { TitlePrimary } from 'src/lib/element/title';
import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';

export function FormComponent(props) {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    props;

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

        <MultiField
          items={values[ARTICLE_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(ARTICLE_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(ARTICLE_FIELD_NAME.CATEGORIES)}
          titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.TAGS"
          placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.WRITE_TAG"
        />
        <SectionLayout type="SMALL">
          <Title tid="ARTICLE_CREATE_FORM.MASTER_CLASS_ARTICLE" />
          <BlockEditor
            formikOnChange={setEditorData(ARTICLE_FIELD_NAME.ARTICLE)}
          />
        </SectionLayout>
        <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(ARTICLE_FIELD_NAME.RECOMMENDATIONS, data)
          }
        />
        <FieldLayout type="double" adaptive>
          <ButtonPrimary type="submit" tid="ARTICLE_CREATE_FORM.BUTTON.CREATE_ARTICLE" />
          <ButtonSecondary tid="ARTICLE_CREATE_FORM.BUTTON.CANCEL" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
