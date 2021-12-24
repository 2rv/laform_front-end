import { FieldArray } from 'formik';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { BasicField, FieldCheckbox } from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import {
  SewingGoodsCreateOptionItemProps,
  SewingGoodsCreateOptionsProps,
  SEWING_GOODS_CREATE_FIELD_NAME,
  SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME,
} from './sewing-goods-create.type';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { spacing } from 'src/lib/theme';
import styled from 'styled-components';
import { Fragment } from 'react';
import { Divider } from 'src/lib/element/divider';

const initialOption = {
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE]: '',
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COLOR]: '',
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE]: 0,
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT]: 0,
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT]: 0,
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_LENGTH]: 0,
  [SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY]: true,
};

export function SewingGoodsCreateOptions(props: SewingGoodsCreateOptionsProps) {
  const {
    formik: { values },
    formik,
  } = props;

  return (
    <FieldArray name={SEWING_GOODS_CREATE_FIELD_NAME.OPTIONS}>
      {({ remove, push }) => (
        <SectionLayout type="SMALL">
          {values[SEWING_GOODS_CREATE_FIELD_NAME.OPTIONS].map(
            (value, index) => {
              function onRemove() {
                remove(index);
              }

              return (
                <Fragment key={index}>
                  <SewingGoodsCreateItem
                    formik={formik}
                    value={value}
                    prefix={`${SEWING_GOODS_CREATE_FIELD_NAME.OPTIONS}.${index}.`}
                    onRemove={onRemove}
                  />
                  <Divider />
                </Fragment>
              );
            },
          )}
          <ButtonSecondary
            tid="Добавить параметр"
            onClick={() => push(initialOption)}
          />
        </SectionLayout>
      )}
    </FieldArray>
  );
}

export function SewingGoodsCreateItem(props: SewingGoodsCreateOptionItemProps) {
  const {
    formik: { values, handleChange, handleBlur },
    onRemove,
    value,
    prefix,
  } = props;

  const isCount = values[SEWING_GOODS_CREATE_FIELD_NAME.IS_COUNT];
  const isLength = values[SEWING_GOODS_CREATE_FIELD_NAME.IS_LENGTH];
  const type = +values[SEWING_GOODS_CREATE_FIELD_NAME.OPTION_TYPE];
  return (
    <FieldLayout type="double" adaptive>
      <BasicField
        titleTid="Размер"
        placeholderTid="Введите размер"
        name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE}
        value={value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_SIZE]}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={type === 3 || type === 0}
        error={type === 3 || type === 0 ? 'Будет удалено' : undefined}
      />
      <Line>
        <BasicField
          titleTid="Цвет"
          placeholderTid="Введите цвет"
          name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COLOR}
          value={value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COLOR]}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={type === 2 || type === 0}
          error={type === 2 || type === 0 ? 'Будет удалено' : undefined}
        />
        <Button onClick={onRemove}>
          <RemoveIcon />
        </Button>
      </Line>
      <BasicField
        titleTid="Цена"
        placeholderTid="Введите цену (руб.)"
        type="number"
        name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE}
        value={value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_PRICE]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <BasicField
        titleTid="Введите скидку (%)"
        placeholderTid="0"
        type="number"
        name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT}
        value={value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_DISCOUNT]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isCount && (
        <BasicField
          titleTid="Введите количество (Шт.)"
          placeholderTid="0"
          type="number"
          name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT}
          value={value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_COUNT]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {isLength && (
        <BasicField
          titleTid="Введите длинну (Метр)"
          placeholderTid="0"
          type="number"
          name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_LENGTH}
          value={value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_LENGTH]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      <FieldCheckbox
        titleTid="Видимость опции"
        labelTid="Опция видна в списке"
        name={prefix + SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY}
        checked={
          value[SEWING_GOODS_CREATE_OPTIONS_FIELD_NAME.OPTION_VISIBILITY]
        }
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FieldLayout>
  );
}

const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
