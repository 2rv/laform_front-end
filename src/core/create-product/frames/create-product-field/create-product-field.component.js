import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE, spacing } from '../../../../lib/theme';
import { FieldLayout, SectionLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonBasic, ButtonSecondary } from '../../../../lib/element/button';
import {
  BasicField,
  FieldSelect,
  TextareaField,
} from '../../../../lib/element/field';

export function CreateProductFieldComponent({
  handleChange,
  handleBlur,
  errors,
  values,
  handleSubmit,
}) {
  return (
    <SectionLayout>
      <SectionLayout type="SMALL">
        <FieldLayout type="double">
          <BasicField
            titleTid="Название товара"
            placeholderTid="Введите название товара"
          />
          <BasicField
            titleTid="Плашка товара"
            placeholderTid="Введите плашку товара"
          />
        </FieldLayout>
        <SectionLayout type="TEXT_SMALL">
          <SmallText tid="Категории товара" />
          <FieldLayout type="double">
            <BasicField placeholderTid="Введите название категории" />
            <BasicField placeholderTid="Введите название категории" />
            <BasicField placeholderTid="Введите название категории" />
            <ButtonBasic tid="Добавить категорию" />
          </FieldLayout>
        </SectionLayout>

        <TextareaField
          titleTid="Описание товара"
          placeholderTid="Полное описание товара"
        />
      </SectionLayout>

      <SectionLayout type="SMALL">
        <Title tid="Опции товара" />
        <FieldSelect
          titleTid="Опция (категория позиции)"
          options={[{ id: 0, tid: 'Цвет' }]}
        />
        <FieldLayout type="double">
          <BasicField
            titleTid="Название позиции"
            placeholderTid="Введите название позиции"
          />
          <BasicField titleTid="Цена" placeholderTid="Введите цену позиции" />
          <ButtonBasic tid="Добавить позицию" />
        </FieldLayout>
        <FieldLayout type="double">
          <ButtonSecondary tid="Добавить опцию" />
        </FieldLayout>
      </SectionLayout>

      <SectionLayout type="SMALL">
        <Title tid="Цена" />
        <FieldLayout type="double">
          <BasicField
            placeholderTid="Полное описание"
            titleTid="Цена товара (минимальная)"
          />
          <BasicField placeholderTid="0 (-0%)" titleTid="Скидка" />
          <ButtonSecondary tid="Создать товар" /> <ButtonBasic tid="Отменить" />
        </FieldLayout>
      </SectionLayout>
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const SmallText = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
