import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  MultiField,
  TextareaField,
} from '../../../lib/element/field';
import { Field } from 'formik';
import { CREATE_MASTER_CLASS_FIELD_NAME } from '../master-class-create.type';
import { ProductPrice } from '../../block-product-create-components';
import { numberValue } from '../../../lib/common/create-product-helpers';
import { RecomendationBlock } from '../../block-recomendation';
import { BlockCategories } from 'src/core/block-categories';
import { ReactEditor } from 'src/core/block-react-editor';

export function FormComponent(props) {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    props;
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);

  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
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
        </FieldLayout>
        <BlockCategories values={values} handleBlur={handleBlur} />
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
      <SectionLayout type="SMALL">
        <Title tid="MASTER_CLASSES.CREATE.FORM.MASTER_CLASS_ARTICLE" />
        <ReactEditor
          handleChange={setEditorData(CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE)}
          values={values[CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE]}
          name={CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE}
          minHeight={100}
        />
      </SectionLayout>
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
          <BasicField
            placeholderTid="MASTER_CLASSES.CREATE.FORM.FIELDS.PLACEHOLDER.INDICATE_PRICE"
            titleTid="MASTER_CLASSES.CREATE.FORM.PRICE"
            name={CREATE_MASTER_CLASS_FIELD_NAME.PRICE}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.PRICE]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.PRICE)}
            onChange={setNumber(CREATE_MASTER_CLASS_FIELD_NAME.PRICE)}
            onBlur={handleBlur}
          />
          <ProductPrice
            priceAndDiscount={{
              discount: values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT],
              price: values[CREATE_MASTER_CLASS_FIELD_NAME.PRICE],
            }}
          />
        </FieldLayout>
        {/* <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS, data)
          }
        /> */}
        <FieldLayout type="double" adaptive>
          <ButtonPrimary
            type="submit"
            tid="MASTER_CLASSES.CREATE.FORM.BUTTON.CREATE_PRODUCT"
          />
          <ButtonSecondary tid="MASTER_CLASSES.CREATE.FORM.BUTTON.CANCEL" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
