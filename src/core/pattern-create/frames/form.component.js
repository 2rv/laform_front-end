import styled from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import {
  BasicField,
  FieldCheckbox,
  TextareaField,
  ComplexityField,
} from 'src/lib/element/field';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { ProductOptions } from 'src/lib/common/block-product-options';
import { BlockCategories } from 'src/lib/common/block-categories';
import { numberValue } from 'src/lib/common/create-product-validation';
import { checkMinPriceAndDiscount } from 'src/lib/common/product-converters/convert.utils';
import { CREATE_PATTERN_FIELD_NAME } from '../pattern-create.type';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';
import { CreatePriceBlock } from 'src/lib/common/block-create-price';
import { TitlePrimary } from 'src/lib/element/title';

export function FormComponent(props) {
  const {
    isEdit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    initialOption,
  } = props;
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (data) => setFieldValue(name, data);

  const setVisible = () => {
    setFieldValue(
      CREATE_PATTERN_FIELD_NAME.DELETED,
      !values[CREATE_PATTERN_FIELD_NAME.DELETED],
    );
  };
  const setEnglish = () => {
    setFieldValue(
      CREATE_PATTERN_FIELD_NAME.IN_ENGLISH,
      !values[CREATE_PATTERN_FIELD_NAME.IN_ENGLISH],
    );
  };

  const setCount = () => {
    if (values[CREATE_PATTERN_FIELD_NAME.TYPE] === 2) {
      setFieldValue(CREATE_PATTERN_FIELD_NAME.COUNT, 0);
    } else {
      setFieldValue(CREATE_PATTERN_FIELD_NAME.COUNT, undefined);
    }
    const newOptions = (values[CREATE_PATTERN_FIELD_NAME.OPTIONS] || []).map(
      (item) => {
        if (values[CREATE_PATTERN_FIELD_NAME.TYPE] === 1) {
          item[CREATE_PATTERN_FIELD_NAME.OPTION_COUNT] = 0;
        } else {
          item[CREATE_PATTERN_FIELD_NAME.OPTION_COUNT] = undefined;
        }
        return item;
      },
    );
    setFieldValue(CREATE_PATTERN_FIELD_NAME.OPTIONS, newOptions);
    setFieldValue(CREATE_PATTERN_FIELD_NAME.TYPE, 2);
    setFieldValue(
      CREATE_PATTERN_FIELD_NAME.IS_COUNT,
      !values[CREATE_PATTERN_FIELD_NAME.IS_COUNT],
    );
  };

  const setType = () => {
    setFieldValue(CREATE_PATTERN_FIELD_NAME.IS_COUNT, false);
    const newOptions = (values[CREATE_PATTERN_FIELD_NAME.OPTIONS] || []).map(
      (item) => {
        if (values[CREATE_PATTERN_FIELD_NAME.TYPE] === 1) {
          item[CREATE_PATTERN_FIELD_NAME.OPTION_COUNT] = 0;
        } else {
          item[CREATE_PATTERN_FIELD_NAME.OPTION_COUNT] = undefined;
        }
        return item;
      },
    );
    setFieldValue(CREATE_PATTERN_FIELD_NAME.OPTIONS, newOptions);
    if (values[CREATE_PATTERN_FIELD_NAME.TYPE] === 1) {
      setFieldValue(CREATE_PATTERN_FIELD_NAME.TYPE, 2);
      setFieldValue(CREATE_PATTERN_FIELD_NAME.COUNT, 0);
    } else {
      setFieldValue(CREATE_PATTERN_FIELD_NAME.TYPE, 1);
    }
  };
  return (
    <SectionLayout type="SMALL">
      <Title tid="Основная информация" />
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.NAME"
          placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.NAME"
          name={CREATE_PATTERN_FIELD_NAME.NAME}
          value={values[CREATE_PATTERN_FIELD_NAME.NAME]}
          error={getFieldError(CREATE_PATTERN_FIELD_NAME.NAME)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DICE_OF_GOODS"
          placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.DICE_OF_GOODS"
          name={CREATE_PATTERN_FIELD_NAME.MODIFIER}
          value={values[CREATE_PATTERN_FIELD_NAME.MODIFIER]}
          error={getFieldError(CREATE_PATTERN_FIELD_NAME.MODIFIER)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="Артикул"
          placeholderTid="Введите артикул"
          name={CREATE_PATTERN_FIELD_NAME.VENDOR_CODE}
          value={values[CREATE_PATTERN_FIELD_NAME.VENDOR_CODE]}
          error={getFieldError(CREATE_PATTERN_FIELD_NAME.VENDOR_CODE)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldLayout>
      <BlockCategories values={values} type={2} />
      <TextareaField
        titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.DESCRIPTION"
        placeholderTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.DESCRIPTION"
        name={CREATE_PATTERN_FIELD_NAME.DESCRIPTION}
        value={values[CREATE_PATTERN_FIELD_NAME.DESCRIPTION]}
        error={getFieldError(CREATE_PATTERN_FIELD_NAME.DESCRIPTION)}
        onChange={handleChange}
        onBlur={handleBlur}
        minHeight={100}
      />

      <Divider />

      <BlockReactEditor
        titleTid="PATTERNS.CREATE.FORM.MATERIALS"
        handleChange={setEditorData(CREATE_PATTERN_FIELD_NAME.MATERIAL)}
        data={values[CREATE_PATTERN_FIELD_NAME.MATERIAL]}
        error={getFieldError(CREATE_PATTERN_FIELD_NAME.MATERIAL)}
        enableIsEdit={isEdit}
      />

      <Divider />

      <Title tid="Параметры товара" />
      <FieldLayout type="double" adaptive>
        <ComplexityField
          title="PATTERNS.CREATE.FORM.COMPLEXITY"
          value={values[CREATE_PATTERN_FIELD_NAME.COMPLEXITY]}
          onChange={setNumber(CREATE_PATTERN_FIELD_NAME.COMPLEXITY)}
        />
        <FieldCheckbox
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.TYPE"
          labelTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.TYPE"
          name={CREATE_PATTERN_FIELD_NAME.TYPE}
          value={values[CREATE_PATTERN_FIELD_NAME.TYPE]}
          onBlur={handleBlur}
          checked={1 === values[CREATE_PATTERN_FIELD_NAME.TYPE]}
          onClick={setType}
        />
        {values[CREATE_PATTERN_FIELD_NAME.TYPE] === 2 && (
          <FieldCheckbox
            titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.PRODUCT_QUANTITY"
            labelTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.PRODUCT_QUANTITY"
            name={CREATE_PATTERN_FIELD_NAME.IS_COUNT}
            value={values[CREATE_PATTERN_FIELD_NAME.IS_COUNT]}
            onBlur={handleBlur}
            checked={values[CREATE_PATTERN_FIELD_NAME.IS_COUNT]}
            onClick={setCount}
          />
        )}
      </FieldLayout>

      <ProductOptions
        isPattern
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
        handleChange={handleChange}
        handleBlur={handleBlur}
        productPriceName={CREATE_PATTERN_FIELD_NAME.PRICE}
        productDiscountName={CREATE_PATTERN_FIELD_NAME.DISCOUNT}
        initialOption={initialOption}
        fieldArrayName={CREATE_PATTERN_FIELD_NAME.OPTIONS}
        optionTypeName={CREATE_PATTERN_FIELD_NAME.OPTION_TYPE}
        optionSizeName={CREATE_PATTERN_FIELD_NAME.OPTION_SIZE}
        optionPriceName={CREATE_PATTERN_FIELD_NAME.OPTION_PRICE}
        optionDiscountName={CREATE_PATTERN_FIELD_NAME.OPTION_DISCOUNT}
        productCountName={CREATE_PATTERN_FIELD_NAME.COUNT}
        isCount={values[CREATE_PATTERN_FIELD_NAME.IS_COUNT]}
        optionCountName={CREATE_PATTERN_FIELD_NAME.OPTION_COUNT}
        isFile
        optionFileName={CREATE_PATTERN_FIELD_NAME.OPTION_FILE}
        optionFilesName={CREATE_PATTERN_FIELD_NAME.OPTION_FILES}
        productFileName={CREATE_PATTERN_FIELD_NAME.FILE}
        productFilesName={CREATE_PATTERN_FIELD_NAME.FILES}
        optionVisibilityName={CREATE_PATTERN_FIELD_NAME.OPTION_VISIBILITY}
      />

      <Divider />

      <RecomendationBlock
        values={values[CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS]}
        name={CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS}
        setFieldValue={setFieldValue}
      />

      <Divider />

      <CreatePriceBlock
        priceAndDiscount={checkMinPriceAndDiscount(
          values[CREATE_PATTERN_FIELD_NAME.OPTIONS],
          values[CREATE_PATTERN_FIELD_NAME.PRICE],
          values[CREATE_PATTERN_FIELD_NAME.DISCOUNT],
        )}
      />

      <Divider />

      <FieldLayout type="double" adaptive>
        <FieldCheckbox
          titleTid="PATTERNS.CREATE.FORM.FIELDS.TITLE.VISIBILITY"
          labelTid="PATTERNS.CREATE.FORM.FIELDS.PLACEHOLDER.VISIBILITY"
          name={CREATE_PATTERN_FIELD_NAME.DELETED}
          checked={!values[CREATE_PATTERN_FIELD_NAME.DELETED]}
          onClick={setVisible}
        />

        <FieldCheckbox
          titleTid="На английском"
          labelTid="Этот товар на английском"
          name={CREATE_PATTERN_FIELD_NAME.IN_ENGLISH}
          checked={values[CREATE_PATTERN_FIELD_NAME.IN_ENGLISH]}
          onClick={setEnglish}
        />
      </FieldLayout>

      <FieldLayout type="double" adaptive>
        {isEdit ? (
          <ButtonPrimary type="submit" tid="PATTERNS.CREATE.FORM.BUTTON.SAVE" />
        ) : (
          <ButtonPrimary
            type="submit"
            tid="PATTERNS.CREATE.FORM.BUTTON.CREATE_PRODUCT"
          />
        )}
        <ButtonSecondary
          onClick={() => window.location.reload()}
          tid="PATTERNS.CREATE.FORM.BUTTON.RESET"
        />
      </FieldLayout>
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;
