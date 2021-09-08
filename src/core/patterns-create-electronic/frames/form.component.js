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
import { FileField } from '../../../lib/element/field/file.field';
import { ELECTRONIC_PATTERN_FIELD_NAME } from '../patterns-create-electronic.type';
import { ProductPrice } from '../../block-product-components';
import { numberValue } from '../../../lib/common/create-product-helpers';
import { RecomendationBlock } from '../../block-recomendation';
import { BlockEditor } from '../../block-editor';

export function FormComponent(props) {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    props;

  const getFieldError = (name) => errors[name] && touched[name] && errors[name];
  const setNumber = (name) => (e) => setFieldValue(name, numberValue(e));
  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);

  return (
    <SectionLayout>
      <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="Название"
            placeholderTid="Введите название"
            name={ELECTRONIC_PATTERN_FIELD_NAME.NAME}
            value={values[ELECTRONIC_PATTERN_FIELD_NAME.NAME]}
            error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Плашка"
            placeholderTid="Например - Хит"
            name={ELECTRONIC_PATTERN_FIELD_NAME.MODIFIER}
            value={values[ELECTRONIC_PATTERN_FIELD_NAME.MODIFIER]}
            error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.MODIFIER)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldLayout>
        <MultiField
          items={values[ELECTRONIC_PATTERN_FIELD_NAME.CATEGORIES]}
          setItems={(data) =>
            setFieldValue(ELECTRONIC_PATTERN_FIELD_NAME.CATEGORIES, data)
          }
          error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.CATEGORIES)}
          titleTid="Теги"
          placeholderTid="Введите тег и нажмите Enter"
        />
        <TextareaField
          titleTid="Описание"
          placeholderTid="Опишите товар"
          name={ELECTRONIC_PATTERN_FIELD_NAME.DESCRIPTION}
          value={values[ELECTRONIC_PATTERN_FIELD_NAME.DESCRIPTION]}
          error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.DESCRIPTION)}
          onChange={handleChange}
          onBlur={handleBlur}
          minHeight={100}
        />
        <SectionLayout type="TEXT_SMALL">
          <SmallTitle tid="Материалы" />
          <BlockEditor
            formikOnChange={setEditorData(
              ELECTRONIC_PATTERN_FIELD_NAME.MATERIAL,
            )}
          />
        </SectionLayout>
      </SectionLayout>
      <FieldLayout type="double" adaptive>
        <FileField
          titleTid="Загрузка файла"
          placeholderTid="Загрузить файл pdf"
          name={ELECTRONIC_PATTERN_FIELD_NAME.FILE}
          value={values[ELECTRONIC_PATTERN_FIELD_NAME.FILE]}
          error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.FILE)}
          onChange={(event) =>
            setFieldValue(
              ELECTRONIC_PATTERN_FIELD_NAME.FILE,
              event.currentTarget.files[0],
            )
          }
          onBlur={handleBlur}
        />
        <Complexity>
          <SmallTitle tid="Сложность выкройки" />
          <FieldComplexity>
            {[1, 2, 3, 4, 5].map((value, index) => (
              <ComplexityDot
                key={index}
                act={
                  value <= values[ELECTRONIC_PATTERN_FIELD_NAME.COMPLEXITY]
                    ? 1
                    : 0
                }
              >
                <FieldRadio
                  type="radio"
                  name={ELECTRONIC_PATTERN_FIELD_NAME.COMPLEXITY}
                  value={value}
                  onChange={setNumber(ELECTRONIC_PATTERN_FIELD_NAME.COMPLEXITY)}
                />
              </ComplexityDot>
            ))}
          </FieldComplexity>
        </Complexity>
      </FieldLayout>

      <SectionLayout type="SMALL">
        <Title tid="Цена" />
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="0"
            titleTid="Скидка (%)"
            name={ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT}
            value={values[ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT]}
            error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT)}
            onChange={setNumber(ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT)}
            onBlur={handleBlur}
          />
          <BasicField
            titleTid="Цена товара"
            placeholderTid="Введите цену товара (в руб.)"
            name={ELECTRONIC_PATTERN_FIELD_NAME.PRICE}
            value={values[ELECTRONIC_PATTERN_FIELD_NAME.PRICE]}
            error={getFieldError(ELECTRONIC_PATTERN_FIELD_NAME.PRICE)}
            onChange={setNumber(ELECTRONIC_PATTERN_FIELD_NAME.PRICE)}
            onBlur={handleBlur}
          />
          <ProductPrice
            discount={values[ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT]}
            price={values[ELECTRONIC_PATTERN_FIELD_NAME.PRICE]}
          />
        </FieldLayout>
        <RecomendationBlock
          onSetRecomendation={(data) =>
            setFieldValue(ELECTRONIC_PATTERN_FIELD_NAME.RECOMMENDATIONS, data)
          }
        />
        <FieldLayout type="double" adaptive>
          <ButtonPrimary type="submit" tid="Создать электронную выкройку" />
          <ButtonSecondary tid="Отменить" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SmallTitle = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Complexity = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
const FieldComplexity = styled.div`
  display: flex;
  padding: ${spacing(3)};
  gap: ${spacing(1)};
  background-color: ${THEME_COLOR.GRAY};
  height: 46px;
  align-items: center;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const FieldRadio = styled(Field)`
  display: none;
`;
const ComplexityDot = styled.label`
  width: 16px;
  min-width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  background-color: ${(p) =>
    p.act ? THEME_COLOR.SECONDARY_DARK : THEME_COLOR.LIGHT_GRAY};
`;
