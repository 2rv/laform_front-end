import { FieldArray } from 'formik';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { BlockSelectFiles } from 'src/lib/common/block-select-files';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { BasicField, FieldCheckbox } from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';
import styled from 'styled-components';
import {
  PatternCreateOptionsProps,
  PatternCreateOptionItemProps,
  PATTERN_CREATE_FIELD_NAME,
  PATTERN_CREATE_OPTIONS_FIELD_NAME,
} from './pattern-create.type';

const initialOption = {
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE]: '',
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE]: 0,
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT]: 0,
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT]: 0,
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_FILES]: [],
  [PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY]: true,
};

export function PatternCreateOptions(props: PatternCreateOptionsProps) {
  const {
    formik: { values },
    formik,
  } = props;
  return (
    <FieldArray name={PATTERN_CREATE_FIELD_NAME.OPTIONS}>
      {({ remove, push }) => (
        <>
          {values[PATTERN_CREATE_FIELD_NAME.OPTIONS].map((value, index) => {
            function onRemove() {
              remove(index);
            }

            return (
              <PatternCreateOptionItem
                formik={formik}
                value={value}
                prefix={`${PATTERN_CREATE_FIELD_NAME.OPTIONS}.${index}.`}
                onRemove={onRemove}
              />
            );
          })}
          <FieldLayout type="double" adaptive>
            <ButtonSecondary
              tid="Добавить параметр"
              onClick={() => push(initialOption)}
            />
          </FieldLayout>
        </>
      )}
    </FieldArray>
  );
}

function PatternCreateOptionItem(props: PatternCreateOptionItemProps) {
  const {
    formik: { values, handleChange, handleBlur, setFieldValue },
    value,
    prefix,
    onRemove,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="Размер"
          placeholderTid="Введите размер"
          name={prefix + PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE}
          value={value[PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE]}
          onChange={handleChange}
          onBlur={handleBlur}
          //   error={getFieldError(optionName, index)}
        />
        <Line>
          <BasicField
            titleTid="Цена"
            placeholderTid="Введите цену (руб.)"
            name={prefix + PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE}
            value={value[PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE]}
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            // error={getFieldError(optionPriceName, index)}
          />
          <Button onClick={onRemove}>
            <RemoveIcon />
          </Button>
        </Line>

        <BasicField
          titleTid="Введите скидку (%)"
          placeholderTid="0"
          name={prefix + PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT}
          value={value[PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT]}
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          //   error={getFieldError(optionDiscountName, index)}
        />
        {values[PATTERN_CREATE_FIELD_NAME.IS_COUNT] && (
          <BasicField
            titleTid="Введите количество (Шт.)"
            placeholderTid="0"
            name={prefix + PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT}
            value={value[PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT]}
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            // error={getFieldError(optionCountName, index)}
          />
        )}
      </FieldLayout>

      <BlockSelectFiles
        files={value[PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_FILES]}
        name={prefix + PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_FILES}
        setFieldValue={setFieldValue}
      />

      <FieldCheckbox
        titleTid="Видимость опции"
        labelTid="Опция видна в списке"
        name={prefix + PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY}
        checked={value[PATTERN_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </SectionLayout>
  );
}

const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
