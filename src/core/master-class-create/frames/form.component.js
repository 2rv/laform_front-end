import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import {
  BasicField,
  TextareaField,
  FieldCheckbox,
} from 'src/lib/element/field';
import { Field } from 'formik';
import { CREATE_MASTER_CLASS_FIELD_NAME } from '../master-class-create.type';
import { BlockCategories } from 'src/lib/common/block-categories';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { numberValue } from 'src/lib/common/create-product-validation';
import { CreatePriceBlock } from 'src/lib/common/block-create-price';
import { Divider } from 'src/lib/element/divider';

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
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);
  const setVisible = () => {
    setFieldValue(
      CREATE_MASTER_CLASS_FIELD_NAME.DELETED,
      !values[CREATE_MASTER_CLASS_FIELD_NAME.DELETED],
    );
  };
  const setEnglish = () => {
    setFieldValue(
      CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH,
      !values[CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH],
    );
  };

  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <Title tid="Основная информация" />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.NAME"
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={CREATE_MASTER_CLASS_FIELD_NAME.NAME}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.NAME]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
            name={CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Артикул"
            placeholderTid="Введите артикул"
            name={CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <BlockCategories values={values} handleBlur={handleBlur} type={0} />
        <TextareaField
          titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
          placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
          name={CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION}
          value={values[CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
      </SectionLayout>

      <Divider />

      <BlockReactEditor
        titleTid="PATTERNS.CREATE.FORM.MATERIALS"
        handleChange={setEditorData(CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL)}
        data={values[CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL]}
        error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL)}
        enableIsEdit={isEdit}
      />

      <Divider />

      <BlockReactEditor
        titleTid="MASTER_CLASSES.CREATE.FORM.MASTER_CLASS_ARTICLE"
        handleChange={setEditorData(CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE)}
        data={values[CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE]}
        minHeight={100}
        enableIsEdit={isEdit}
      />

      <Divider />

      <SectionLayout type="SMALL">
        <Title tid="MASTER_CLASSES.CREATE.FORM.PRICE" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.DISCOUNT"
            name={CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onChange={setNumber(CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          <Test
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.INDICATE_PRICE"
            titleTid="MASTER_CLASSES.CREATE.FORM.PRICE"
            name={CREATE_MASTER_CLASS_FIELD_NAME.PRICE}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.PRICE]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.PRICE)}
            onChange={setNumber(CREATE_MASTER_CLASS_FIELD_NAME.PRICE)}
            onBlur={handleBlur}
          />
          <CreatePriceBlock
            priceAndDiscount={{
              discount: values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT],
              price: values[CREATE_MASTER_CLASS_FIELD_NAME.PRICE],
            }}
          />
        </FieldLayout>

        <Divider />

        <RecomendationBlock
          values={values[CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]}
          name={CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS}
          setFieldValue={setFieldValue}
        />

        <Divider />
        <FieldLayout type="double" adaptive>
          <FieldCheckbox
            titleTid="MASTER_CLASSES.CREATE.FORM.FIELDS.TITLE.VISIBILITY"
            labelTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.VISIBILITY"
            name={CREATE_MASTER_CLASS_FIELD_NAME.DELETED}
            checked={!values[CREATE_MASTER_CLASS_FIELD_NAME.DELETED]}
            onClick={setVisible}
          />
          <FieldCheckbox
            titleTid="На английском"
            labelTid="Этот товар на английском"
            name={CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH}
            checked={values[CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH]}
            onClick={setEnglish}
          />
        </FieldLayout>
        <FieldLayout type="double" adaptive>
          {isEdit ? (
            <ButtonPrimary
              type="submit"
              tid="MASTER_CLASSES.CREATE.FORM.BUTTON.SAVE"
            />
          ) : (
            <ButtonPrimary
              type="submit"
              tid="MASTER_CLASSES.CREATE.FORM.BUTTON.CREATE_PRODUCT"
            />
          )}

          <ButtonSecondary
            onClick={() => window.location.reload()}
            tid="MASTER_CLASSES.CREATE.FORM.BUTTON.RESET"
          />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Test = styled(BasicField)`
  background-color: red;
`;
