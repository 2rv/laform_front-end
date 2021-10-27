import styled from 'styled-components';
import { THEME_SIZE } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TextSecondary } from '../../../lib/element/text';
import { Divider } from 'src/lib/element/divider';
import { ErrorField } from 'src/lib/element/error';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  FieldCheckbox,
  TextareaField,
} from '../../../lib/element/field';
import { RecomendationBlock } from '../../../lib/common/block-select-recomendation';
import { ReactEditor } from 'src/core/block-react-editor';
import { ProductOptions } from '../../block-product-options';
import { BlockCategories } from 'src/core/block-categories';
import {
  ProductPrice,
  ComplexityField,
} from '../../block-product-create-components';
import { numberValue } from 'src/lib/common/create-product-validation';
import { checkMinPriceAndDiscount } from 'src/lib/common/product-converters/convert.utils';
import { CREATE_PATTERN_FIELD_NAME } from '../pattern-create.type';

export function FormComponent(props) {
  const {
    isEdit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleReset,
    setFieldValue,
    initialOption,
  } = props;
  console.log(values);
  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (data) => setFieldValue(name, data);

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
          item[CREATE_PATTERN_FIELD_NAME.OPTION_FILE] = undefined;
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
          item[CREATE_PATTERN_FIELD_NAME.OPTION_FILE] = undefined;
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
      setFieldValue(CREATE_PATTERN_FIELD_NAME.FILE, undefined);
    } else {
      setFieldValue(CREATE_PATTERN_FIELD_NAME.TYPE, 1);
    }
  };
  return (
    <SectionLayout type="SMALL">
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

      <SectionLayout type="TEXT_SMALL">
        <SmallTitle tid="PATTERNS.CREATE.FORM.MATERIALS" />
        <ReactEditor
          handleChange={setEditorData(CREATE_PATTERN_FIELD_NAME.MATERIAL)}
          data={values[CREATE_PATTERN_FIELD_NAME.MATERIAL]}
          name={CREATE_PATTERN_FIELD_NAME.MATERIAL}
          enableReInitialize
        />
        {getFieldError(CREATE_PATTERN_FIELD_NAME.MATERIAL) && (
          <ErrorField
            errorTid={getFieldError(CREATE_PATTERN_FIELD_NAME.MATERIAL)}
          />
        )}
      </SectionLayout>

      <FieldLayout type="double" adaptive>
        <ComplexityField
          title="PATTERNS.CREATE.FORM.COMPLEXITY"
          value={values[CREATE_PATTERN_FIELD_NAME.COMPLEXITY]}
          onChange={setNumber(CREATE_PATTERN_FIELD_NAME.COMPLEXITY)}
        />
        <FieldCheckbox
          titleTid="Тип выкройки"
          labelTid="Электронный"
          name={CREATE_PATTERN_FIELD_NAME.TYPE}
          value={values[CREATE_PATTERN_FIELD_NAME.TYPE]}
          onBlur={handleBlur}
          checked={1 === values[CREATE_PATTERN_FIELD_NAME.TYPE]}
          onClick={setType}
        />
        {values[CREATE_PATTERN_FIELD_NAME.TYPE] === 2 && (
          <FieldCheckbox
            titleTid="Количество"
            labelTid="Наличие количества"
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
        productFileName={CREATE_PATTERN_FIELD_NAME.FILE}
        initialOption={initialOption}
        fieldArrayName={CREATE_PATTERN_FIELD_NAME.OPTIONS}
        optionTypeName={CREATE_PATTERN_FIELD_NAME.OPTION_TYPE}
        optionSizeName={CREATE_PATTERN_FIELD_NAME.OPTION_SIZE}
        optionPriceName={CREATE_PATTERN_FIELD_NAME.OPTION_PRICE}
        optionDiscountName={CREATE_PATTERN_FIELD_NAME.OPTION_DISCOUNT}
        productCountName={CREATE_PATTERN_FIELD_NAME.COUNT}
        isCount={values[CREATE_PATTERN_FIELD_NAME.IS_COUNT]}
        optionCountName={CREATE_PATTERN_FIELD_NAME.OPTION_COUNT}
        optionFileName={CREATE_PATTERN_FIELD_NAME.OPTION_FILE}
        isFile={values[CREATE_PATTERN_FIELD_NAME.TYPE] === 1}
      />

      <Divider />

      <RecomendationBlock
        values={values[CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS]}
        name={CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS}
        setFieldValue={setFieldValue}
      />

      <ProductPrice
        priceAndDiscount={checkMinPriceAndDiscount(
          values[CREATE_PATTERN_FIELD_NAME.OPTIONS],
          values[CREATE_PATTERN_FIELD_NAME.PRICE],
          values[CREATE_PATTERN_FIELD_NAME.DISCOUNT],
        )}
      />
      <FieldLayout type="double" adaptive>
        {isEdit ? (
          <ButtonPrimary type="submit" tid="Сохранить" />
        ) : (
          <ButtonPrimary
            type="submit"
            tid="PATTERNS.CREATE.FORM.BUTTON.CREATE_PRODUCT"
          />
        )}
        <ButtonSecondary
          onClick={handleReset}
          tid="PATTERNS.CREATE.FORM.BUTTON.RESET"
        />
      </FieldLayout>
    </SectionLayout>
  );
}
const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
