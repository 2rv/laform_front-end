import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
import { TextSecondary } from '../../../lib/element/text';
import { TitlePrimary } from '../../../lib/element/title';
import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
import {
  BasicField,
  MultiField,
  TextareaField,
} from '../../../lib/element/field';
import { Field } from 'formik';
import { DynamicFields, ProductPrice } from '../../block-product-components';
import { CREATE_MASTER_CLASS_FIELD_NAME } from '../master-class-create.type';
import {
  dynamicFieldsMinPrice,
  numberValue,
} from '../../../lib/common/create-product-helpers';
import MarkdownEditor from './markdown-edittor';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    programsInit,
  } = props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));

  //----------------------------

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="Название"
            placeholderTid="Введите название"
            name={CREATE_MASTER_CLASS_FIELD_NAME.NAME}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.NAME]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Плашка"
            placeholderTid="Например - Хит"
            name={CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <MultiField
          items={values[CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES)}
          titleTid="Теги"
          placeholderTid="Введите тег и нажмите Enter"
        />
        <TextareaField
          titleTid="Описание"
          placeholderTid="Опишите мастер-класс"
          name={CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION}
          value={values[CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
        <MarkdownEditor />
      </SectionLayout>
      <DynamicFields
        nameFieldArray={CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS}
        namePosition={CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_NAME}
        pricePosition={CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE}
        initialData={programsInit}
        title="Программы"
        fieldTitle="Название программы"
        fieldPlaceholder="Введите название программы"
        buttonText="Добавить программу"
        errors={errors}
        touched={touched}
        values={values}
        setFieldValue={setFieldValue}
      />
      <SectionLayout type="SMALL">
        <Title tid="Цена" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="Скидка (%)"
            name={CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT}
            value={values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            error={getFieldError(CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onChange={setNumber(CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          <ProductPrice
            discount={values[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]}
            price={dynamicFieldsMinPrice(
              values[CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS],
              CREATE_MASTER_CLASS_FIELD_NAME.PROGRAM_PRICE,
            )}
          />
        </FieldLayout>
        <FieldLayout type="double" adaptive>
          <ButtonPrimary type="submit" tid="Создать мастер-класс" />
          <ButtonSecondary type="button" tid="Отменить" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
